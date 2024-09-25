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

# ###
#
THIS=$(readlink -f "${BASH_SOURCE[0]}" 2>/dev/null || echo $0)
APP_INIT_SCRIPT_DIR=$(dirname "${THIS}")
APP_INIT_SCRIPT_STARTED=$(date +'%A %B %e %T %Y')
#export APP_INIT_SCRIPT_STARTED
#export APP_INIT_SCRIPT_DIR

# ###
if [ ! -d "$APP_ALLOWED_CONFIGS" ]; then
  APP_ALLOWED_CONFIGS=.defaults,.config,.env,.ctx
  export APP_ALLOWED_CONFIGS
fi
# ###

# #########################################################################################################
# ###
#
echo -e "\033[38;2;100;100;32m"
echo -e "   Started '$THIS' at '$APP_INIT_SCRIPT_STARTED'"
echo -e "\033[0m"


# ###
#
source $APP_INIT_SCRIPT_DIR/helpers.sh

# #########################################################################################################
# ###
#
export APP_DEPLOY_DATETIME=$(date)

# #########################################################################################################
# ###
#
