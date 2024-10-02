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
# APP_INIT_SCRIPT_STARTED=$(date +'%A %B %e %T %Y')
APP_INIT_SCRIPT_STARTED=$(date +'%Y.%m.%d %H:%M:%S.%N')
export APP_INIT_SCRIPT_STARTED
export APP_INIT_SCRIPT_FILENAME
export APP_INIT_SCRIPT_DIR
# ###

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
# ###   testim
#
testim() {
echo -e "\033[0;255;0;32m"
echo -e "   testim: '$THIS' at '$APP_INIT_SCRIPT_STARTED'"
echo -e "\033[0m"
}

# #########################################################################################################
# ###
#
env_load
env_print

#config_save
#vars_save

# config_upload

testim
