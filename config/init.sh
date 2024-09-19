#!/usr/bin/env bash
# #########################################################################################################
# ###
#
#set -euo pipefail
#
# ###
#
# ### store current directory
# pushd .
#

# #########################################################################################################
# ###
#
if [ ! -d "$APP_ALLOWED_CONFIGS" ]; then
  APP_ALLOWED_CONFIGS=.defaults,.config,.env,.ctx,.env.render
  export APP_ALLOWED_CONFIGS
fi

# ###
THIS=$(readlink -f "${BASH_SOURCE[0]}" 2>/dev/null || echo $0)
APP_INIT_SCRIPT_DIR=$(dirname "${THIS}")
APP_INIT_SCRIPT_STARTED=$(date +'%A %B %e %T %Y')

export APP_INIT_SCRIPT_STARTED
export APP_INIT_SCRIPT_DIR

# ###

# #########################################################################################################
# ###
#
echo -e "\033[38;2;100;100;32m"
echo -e "   $APP_INIT_SCRIPT_STARTED"
echo -e "   Started $PWD/init.sh"
echo -e "\033[0m"

# #########################################################################################################
# ###
# $#   :number of positional parameters.
# $?   :most recent foreground pipeline exit status.
# $-   :current options set for the shell.
# $$   :pid of the current shell (not subshell).
# $!   :is the PID of the most recent background command.
# $_   :last argument of the previously executed command, or the path of the bash script.
# $PWD					current directory
# $USER					current username
# $HOSTNAME			current hostname
#HOST_IP=$(ip -4 route list match 0/0 | awk '{print $3}')
#echo "Host ip is $HOST_IP"
# ###    Full path of the current script
#THIS=$(readlink -f "${BASH_SOURCE[0]}" 2>/dev/null || echo $0);
# ### The directory where current script resides
#DIR=$(dirname "${THIS}")

# #########################################################################################################
# ###
#
env_load() {
  echo -e "\033[38;2;0;255;02m"
  IFS=',' read -a arr <<<"$APP_ALLOWED_CONFIGS"
  for filename in "${arr[@]}"; do
    # shellcheck disable=SC1073
    if [[ -f "$filename" ]]; then
      echo -e "   Load variables from: $filename"
      set -a
      # export | grep -vE '^(#|$)' $filename >/dev/null 2>&1
      # shellcheck disable=SC1090
      source $filename
      set +a
    fi
  done
  echo -e "\033[0m"
}

env_print() {
  # echo "Show environment variables"
  # env | sort | less
  # ###
  # echo "   Show N8N variables:"
  # env  | sort | grep N8N
  # ###
  # env | sort >env.render.md 2>&1

  echo -e "\033[38;2;0;255;32m"
  echo -e "   work directory: $PWD"
  echo "   APP_ variables:"
  env | sort | grep APP_
  echo "   RENDER_ variables:"
  env | sort | grep RENDER_
  echo "   N8N_ variables:"
  env | sort | grep N8N_
  # ###
  echo -e "\033[0m"
}

# #########################################################################################################
# ###
#

# ###   Config to github
#
config_push() {
  # ###   Git commit
  #
  echo -e '   Config commit to github'
  cp -rf "$N8N_RENDER_DIR/.n8n/." "$APP_BASE_DIR/config"
  git add --update --force "$APP_CONFIG_DIR/config/*"
  git commit -a -m "config update"

  # ###   Git push
  #
  echo -e "   Config git push   =>   $GIT_USERNAME:$GIT_TOKEN@$GIT_REPO"
  # git push origin master
  #git push --set-upstream "$GIT_USERNAME:$GIT_TOKEN@$GIT_REPO" master
  git push --set-upstream "$GIT_USERNAME:$GIT_TOKEN@$GIT_REPO" master

}

# ###   Config restore
config_restore() {
  echo -e "   Config restore"
  RENDER_N8N_CONFIG_DIR="$RENDER_ROOT/.n8n"

  if [ ! -d "$RENDER_N8N_CONFIG_DIR" ]; then
    echo -e "   WARN! not exists dir: $RENDER_N8N_CONFIG_DIR, make dir";
    mkdir -p "$RENDER_N8N_CONFIG_DIR";
  fi

  if [ ! -d "$APP_CONFIG_DIR" ]; then
    echo -e "   WARN! not exists dir: $APP_CONFIG_DIR, use $APP_INIT_SCRIPT_DIR";
    APP_CONFIG_DIR=$APP_INIT_SCRIPT_DIR;
  fi

  #echo -e "   Copy config files: $APP_CONFIG_DIR => $RENDER_N8N_CONFIG_DIR";
  #cp -rf "$APP_CONFIG_DIR/." "$RENDER_N8N_CONFIG_DIR/"
  echo -e "   Copy config files: $RENDER_REPO_ROOT/config => $RENDER_N8N_CONFIG_DIR";
  cp -rf "$APP_INIT_SCRIPT_DIR/." "$RENDER_N8N_CONFIG_DIR/"
}

# ###   Config save
config_save() {
  echo -e '   Config save'
  RENDER_N8N_CONFIG_DIR="$RENDER_ROOT/.n8n"

  if [ -d "$RENDER_N8N_CONFIG_DIR" ]; then
    echo -e "   Copy config files: $RENDER_N8N_CONFIG_DIR => $APP_CONFIG_DIR";
    #cp -rf "$RENDER_N8N_CONFIG_DIR/." "$APP_CONFIG_DIR/"
    cp -rf "$RENDER_N8N_CONFIG_DIR/." "./"
  fi

  config_push
}

# #########################################################################################################
# ###
#
init_check() {

  if [ ! -d "$RENDER_ROOT" ]; then
    echo -e "   WARN! dir '$RENDER_ROOT' not exists, make dir";
    mkdir -p "$RENDER_ROOT";
    # sudo chown -R $RENDER_ROOT $USER:$USER
  fi

  # #########################################################################################################
  # ###
  #
  if [ -f "$APP_BASE_DIR/.git/index.lock" ]; then rm -f "$APP_BASE_DIR/.git/index.lock"; fi

}

init_checkout() {
  # #########################################################################################################
  # ###
  #
  #echo -e "cd $APP_BASE_DIR"
  # shellcheck disable=SC2164
  #cd "$APP_BASE_DIR"

  if [ "$APP_GITHUB_EMAIL" ]; then
    # ###
    echo -e "Git config user"
    git config user.email $APP_GITHUB_EMAIL
    git config user.name $APP_GITHUB_USER
  # git config credential.helper "store --file ~/.secrets"
  fi

  # ###
  echo -e "Git checkout master"
  git checkout master
}

# #########################################################################################################
# ###
#
env_load
env_print

init_check
init_checkout

config_restore
# config_save


