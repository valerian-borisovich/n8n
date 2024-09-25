#!/usr/bin/env bash
# #########################################################################################################
# ###
#
#set -euo pipefail
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
  if [ -d "$RENDER_N8N_CONFIG_DIR" ]; then
    echo -e "   Copy config files: $APP_CONFIG_DIR => $RENDER_N8N_CONFIG_DIR";
    cp -rf "$APP_CONFIG_DIR/." "$RENDER_N8N_CONFIG_DIR/";
  else
    echo -e "   $RENDER_N8N_CONFIG_DIR dir not exists!";
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
