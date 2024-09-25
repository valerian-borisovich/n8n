#!/usr/bin/env bash
# #########################################################################################################
# ###
#
#set -euo pipefail
#
# ### store current directory
# pushd .
#
# #########################################################################################################
# ###
#
THIS=$(readlink -f "${BASH_SOURCE[0]}" 2>/dev/null || echo $0)
APP_INIT_SCRIPT_FILENAME=$THIS
APP_INIT_SCRIPT_DIR=$(dirname "${THIS}")
APP_INIT_SCRIPT_STARTED=$(date +'%A %B %e %T %Y')
export APP_INIT_SCRIPT_STARTED
export APP_INIT_SCRIPT_FILENAME
export APP_INIT_SCRIPT_DIR
# ###
if [ ! -d "$APP_ALLOWED_CONFIGS" ]; then
  APP_ALLOWED_CONFIGS=.defaults,.config,.env,.ctx
  export APP_ALLOWED_CONFIGS
fi

# #########################################################################################################
# ###
#
echo -e "\033[0;255;0;32m"
echo -e "   Started '$THIS' at '$APP_INIT_SCRIPT_STARTED'"
echo -e "\033[0m"

# ###
#
source $APP_INIT_SCRIPT_DIR/helpers.sh

# #########################################################################################################
# ###   Config save
#
config_save() {
  export RENDER_ROOT=/opt/render
  export RENDER_N8N_CONFIG_DIR="$RENDER_ROOT/.n8n"
  export RENDER_SRC_ROOT=/c/n8n
  export APP_BASE_DIR=$RENDER_SRC_ROOT
  export APP_CONFIG_DIR=$APP_BASE_DIR/packages/conf/latest

  echo -e "\033[0;0;32m"
  echo -e "   Config save $(date)"
  # ###

  if [ -d "$RENDER_N8N_CONFIG_DIR" ]; then
    echo -e "   Copy config files: $RENDER_N8N_CONFIG_DIR => $APP_CONFIG_DIR"
    cp -rf "$RENDER_N8N_CONFIG_DIR/." "$APP_CONFIG_DIR"
  else
    echo -e "   Config files at $RENDER_N8N_CONFIG_DIR not exists!";
  fi

  #
  echo -e "\033[0m"
}

config_upload() {
  # ###
  export GITHUB_EMAIL="valerian.borisovich@gmail.com"
  export GITHUB_USERNAME="Valerian Borisovich"
  export RENDER_SRC_ROOT=/c/n8n
  export APP_BASE_DIR=$RENDER_SRC_ROOT
  export APP_CONFIG_DIR=$$APP_BASE_DIR/packages/conf/latest

  # #########################################################################################################
  # ###   Config upload
  #
  echo -e "\033[0;0;32m"
  echo -e "   Config upload $(date)"

  # ###   Prepare
  #
  git config user.email $GITHUB_EMAIL
  git config user.name $GITHUB_USERNAME
  #
  if [ -f "$APP_BASE_DIR/.git/index.lock" ]; then rm -f "$APP_BASE_DIR/.git/index.lock"; fi
  if [ -f "$APP_BASE_DIR/.git/hooks/pre-commit" ]; then rm -f "$APP_BASE_DIR/.git/index.lock"; fi
  if [ -f "$APP_BASE_DIR/.git/hooks/prepare-commit-msg" ]; then rm -f "$APP_BASE_DIR/.git/index.lock"; fi

  # ###   Status
  git status

  # ###   Pull
  git pull

  # ###   replace localfiles from remote repo
  # git fetch --all
  # git reset --hard origin/master

  # ###   Add files
  # git add .
  # git add --all
  git add --update --force "$APP_CONFIG_DIR/*"
  git commit -a -m "Conf update $(date)"

  # ###   Show changes
  git show --name-only

  # ###   Upload
  git push -u -f origin master

  #
  echo -e "\033[0m"
}


# #########################################################################################################
# ###
#
vars_save()
{
  # #########################################################
  # ###
  #
  export RENDER_SRC_ROOT=/c/n8n
  export APP_BASE_DIR=$RENDER_SRC_ROOT
  export APP_CONFIG_DIR=$APP_BASE_DIR/packages/conf/latest

  # #########################################################
  # ###   Save variables
  #
  echo -e "\033[0;255;0;32m"
  echo -e "   Save variables to '$APP_CONFIG_DIR/vars.md'"

  # ###
  echo -e "# ###   APP" > $APP_CONFIG_DIR/vars.md
  echo -e "#   " >> $APP_CONFIG_DIR/vars.md

  # ###
  echo -e "APP_PWD=$PWD" >> $APP_CONFIG_DIR/vars.md
  #
  env | sort | grep APP_ >> $APP_CONFIG_DIR/vars.md

  # ###
  echo -e "" >> $APP_CONFIG_DIR/vars.md
  echo -e "# ###   RENDER" >> $APP_CONFIG_DIR/vars.md
  echo -e "#   " >> $APP_CONFIG_DIR/vars.md
  env | sort | grep RENDER_ >> $APP_CONFIG_DIR/vars.md

  # ###
  echo -e "" >> $APP_CONFIG_DIR/vars.md
  echo -e "# ###   N8N" >> $APP_CONFIG_DIR/vars.md
  echo -e "#   " >> $APP_CONFIG_DIR/vars.md
  env | sort | grep N8N_ >> $APP_CONFIG_DIR/vars.md

  # ###
  env | sort > $APP_CONFIG_DIR/vars_all.md

  #
  echo -e "\033[0m"
}

# #########################################################################################################
# ###
#
env_load

config_save

vars_save

config_upload

