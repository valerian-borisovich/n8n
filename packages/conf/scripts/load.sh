#!/usr/bin/env bash
# #########################################################################################################
# ###
#
#set -euo pipefail
# ### store current directory
pushd .
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

cd ../$APP_INIT_SCRIPT_DIR

# #########################################################################################################
# ###
#
echo -e "\033[0;255;0;32m"
echo -e "   Started '$THIS' at '$APP_INIT_SCRIPT_STARTED'"
echo -e "\033[0m"
source $APP_INIT_SCRIPT_DIR/helpers.sh

# #########################################################################################################
# ###   Config load
#
config_load() {
  echo -e "\033[0;255;0;32m"
  echo -e "   Config loaded,  '$APP_INIT_SCRIPT_STARTED'"
  echo -e "\033[0m"

  if [ "$APP_CONFIG_DIR" == "" ]; then
    export APP_CONFIG_DIR=../$APP_INIT_SCRIPT_DIR/latest
  fi
  if [ "$RENDER_N8N_CONFIG_DIR" == "" ]; then
    export RENDER_N8N_CONFIG_DIR=/opt/render/.n8n
  fi
  if [ ! -d "$RENDER_N8N_CONFIG_DIR" ]; then
    echo -e "   $RENDER_N8N_CONFIG_DIR dir not exists!"
    mkdir -p "$RENDER_N8N_CONFIG_DIR"
  fi
  if [ -d "$RENDER_N8N_CONFIG_DIR" ]; then
    echo -e "   Copy configs $APP_CONFIG_DIR => $RENDER_N8N_CONFIG_DIR"
    cp -rf $APP_CONFIG_DIR/. $RENDER_N8N_CONFIG_DIR/
    #
    echo -e "   ls -la $RENDER_N8N_CONFIG_DIR"
    ls -la $RENDER_N8N_CONFIG_DIR
  else
    echo -e "   Copy config files FAIL!"
  fi

}

# #########################################################################################################
# ###
#
env_load
env_print

# ###
prepare

# ###
config_load

popd

