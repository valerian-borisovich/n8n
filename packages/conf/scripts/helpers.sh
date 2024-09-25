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
THIS=$(readlink -f "${BASH_SOURCE[0]}" 2>/dev/null || echo $0)
APP_INIT_SCRIPT_FILENAME=$THIS
APP_INIT_SCRIPT_DIR=$(dirname "${THIS}")
APP_INIT_SCRIPT_STARTED=$(date +'%A %B %e %T %Y')
export APP_INIT_SCRIPT_STARTED
export APP_INIT_SCRIPT_FILENAME
export APP_INIT_SCRIPT_DIR
# ###
if [ "$APP_ALLOWED_CONFIGS" == "" ]; then
  APP_ALLOWED_CONFIGS=.defaults,.config,.env,.ctx
  export APP_ALLOWED_CONFIGS
fi

# #########################################################################################################
# ###
#
#echo -e "\033[38;2;100;100;32m"
#echo -e "   Started '$THIS' at $APP_INIT_SCRIPT_STARTED"
#echo -e "\033[0m"

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
testim() {
  echo -e "\033[38;2;0;255;32m"
  echo -e "   testim work directory: $PWD"
  echo -e "\033[0m"
}

testim_data() {
  echo -e "\033[38;2;0;255;32m"
  cat <(echo year is $(date +%Y)) <(echo month is $(date +%m)) <(echo day is $(date +%d))
  echo -e "\033[0m"
}

# #########################################################################################################
# ###
#
env_load() {
  echo -e "\033[38;2;0;255;32m"
  IFS=',' read -a arr <<<"$APP_ALLOWED_CONFIGS"
  for filename in "${arr[@]}"; do
    # shellcheck disable=SC1073
    if [[ -f "$filename" ]]; then
      echo -e "   Loading vars from: $filename"
      set -a
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
  echo -e "\033[38;2;0;255;32m"
  # ###
  echo -e "   APP PWD: $PWD"
  echo "   APP vars:"
  env | sort | grep APP_
  echo "   RENDER vars:"
  env | sort | grep RENDER_
  echo "   N8N vars:"
  env | sort | grep N8N_
  # ###
  echo -e "\033[0m"
}

# #########################################################################################################
# ###
#
prepare() {
  if [ "$RENDER_ROOT" == "" ]; then
    export RENDER_ROOT=/opt/render
  fi
  # ###
  if [ ! -d "$RENDER_ROOT" ]; then
    echo -e "   WARN! dir '$RENDER_ROOT' not exists, make dir"
    mkdir -p "$RENDER_ROOT"
    # sudo chown -R $RENDER_ROOT $USER:$USER
  fi
  # ###
  if [ "$RENDER_SRC_ROOT" == "" ]; then
    export RENDER_SRC_ROOT=/opt/render/project/src
    # export RENDER_SRC_ROOT=/c/n8n
  fi
  # ###
  if [ ! -d "$RENDER_SRC_ROOT" ]; then
    echo -e "   WARN! dir '$RENDER_SRC_ROOT' not exists, make dir"
    mkdir -p "$RENDER_SRC_ROOT"
    # sudo chown -R $RENDER_SRC_ROOT $USER:$USER
  fi
  # ###
  if [ ! -d "$RENDER_N8N_CONFIG_DIR" ]; then
    echo -e "   WARN! not exists dir: $RENDER_N8N_CONFIG_DIR"
    export RENDER_N8N_CONFIG_DIR="$RENDER_ROOT/.n8n"
    mkdir -p $RENDER_N8N_CONFIG_DIR
  fi
  # #########################################################################################################
  if [ "$APP_BASE_DIR" == "" ]; then
    export APP_BASE_DIR=$RENDER_SRC_ROOT
    export APP_CONFIG_DIR=$APP_BASE_DIR/packages/conf/latest
  fi
  # ###
  if [ "$APP_ALLOWED_CONFIGS" == "" ]; then
    export APP_ALLOWED_CONFIGS=.defaults,.config,.env,.ctx
  fi
  # #########################################################################################################
  if [ "$GITHUB_EMAIL" == "" ]; then
    export GITHUB_EMAIL="valerian.borisovich@gmail.com"
    export GITHUB_USERNAME="Valerian Borisovich"
    export GITHUB_LOGIN="valerian-borisovich"
    export GITHUB_TOKEN=""
    export GITHUB_REPO="github.com/valerian-borisovich/n8n.git"
  fi
  # #########################################################################################################
}
