#!/usr/bin/env bash
# #########################################################################################################
# ###
#
#set -euo pipefail
#
# ### store current directory
#pushd .
#
# #########################################################################################################
# ###
#
THIS=$(readlink -f "${BASH_SOURCE[0]}" 2>/dev/null || echo $0)
APP_INIT_SCRIPT_FILENAME=$THIS
APP_INIT_SCRIPT_DIR=$(dirname "${THIS}")
APP_INIT_SCRIPT_STARTED=$(date +'%Y.%m.%d %H:%M:%S.%N')
# ###
export APP_INIT_SCRIPT_STARTED
export APP_INIT_SCRIPT_FILENAME
export APP_INIT_SCRIPT_DIR

# #########################################################################################################
# ###
#
echo -e "\033[38;2;0;255;0m"
echo -e "   Started '$THIS' at '$APP_INIT_SCRIPT_STARTED'"
echo -e "\033[0m"
# ###
#
source $APP_INIT_SCRIPT_DIR/helpers.sh
# #########################################################################################################


# #########################################################################################################
# ###   Config save
#
config_save() {
  echo -e "\033[38;2;0;0;255m"
  echo -e "   Config save $APP_INIT_SCRIPT_STARTED"
  # ###
  if [ -d "$RENDER_N8N_CONFIG_DIR" ]; then
    echo -e "   Copy config files: $RENDER_N8N_CONFIG_DIR => $APP_CONFIG_DIR"
    cp -rf "$RENDER_N8N_CONFIG_DIR/." "$APP_CONFIG_DIR"
  else
    echo -e "   Config files at $RENDER_N8N_CONFIG_DIR not exists!";
  fi
  # ###
  echo -e "\033[0m"
}

# #########################################################################################################
  # ###   Config upload
#
config_upload() {
  echo -e "\033[38;2;0;100;200m"
  echo -e "   Config upload $APP_INIT_SCRIPT_STARTED"

  # ###   Prepare github
  #
  echo -e "   Prepare github: GITHUB_EMAIL: $GITHUB_EMAIL, GITHUB_USERNAME: $GITHUB_USERNAME"
  #
  git config --unset-all credential.helper
  git config --global --unset-all credential.helper
  git config --system --unset-all credential.helper
  # ###
  git config --global user.email "$GITHUB_EMAIL"
  git config --global user.name "$GITHUB_USERNAME"
  # ###
  # git config pull.rebase false

  # ###
  if [ -f "$APP_BASE_DIR/.git/index.lock" ]; then rm -f "$APP_BASE_DIR/.git/index.lock"; fi
  if [ -f "$APP_BASE_DIR/.git/hooks/pre-commit" ]; then rm -f "$APP_BASE_DIR/.git/index.lock"; fi
  if [ -f "$APP_BASE_DIR/.git/hooks/prepare-commit-msg" ]; then rm -f "$APP_BASE_DIR/.git/index.lock"; fi

  # ###
  export LEFTHOOK=0

  # ###   Checkout
  #git checkout master
  git checkout "$GITHUB_BRANCH"

  # ###   Status
  # git status -s

  # ###   Pull
  # git pull --ff
  git pull --quiet

  # ###   replace localfiles from remote repo
  # git fetch --all
  # git reset --hard origin/master

  # ###   Add files
  git add --all
  # git add $APP_CONFIG_DIR/

  # ###   Commit changes
  LEFTHOOK=0 git commit -a -m "conf/latest $APP_INIT_SCRIPT_STARTED"

  # ###   Show changes
  # git show --name-only

  # ###   Upload
  # git push -f -u "https://$GITHUB_LOGIN:$GITHUB_TOKEN@$GITHUB_REPO" "$GITHUB_BRANCH"
  GIT_URL="https://$GITHUB_LOGIN:$GITHUB_TOKEN@$GITHUB_REPO"
  # ###
  # echo -e "git push -f -u $GIT_URL $GITHUB_BRANCH"
  LEFTHOOK=0 git push -f -u "$GIT_URL" "$GITHUB_BRANCH">/dev/null 2>&1

  # ###
  #
  echo -e "\033[0m"
}


# #########################################################################################################
# ###   Save variables
#
vars_save()
{
  echo -e "\033[38;2;0;255;0m"
  echo -e "   Save variables to '$APP_CONFIG_DIR/vars.md'"

  # ###
  echo -e "# ###   APP" > $APP_CONFIG_DIR/vars.md
  echo -e "#   " >> $APP_CONFIG_DIR/vars.md
  # ###
  echo -e "APP_PWD=$PWD" >> $APP_CONFIG_DIR/vars.md
  # ###
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

  # ###   Don't use this! github token leak
  # env | sort > $APP_CONFIG_DIR/vars_all.md

  # ###
  echo -e "\033[0m"
}

# #########################################################################################################
# ###
#
env_load
env_print

# ###
prepare

# ###
config_save
vars_save

# ###
config_upload

