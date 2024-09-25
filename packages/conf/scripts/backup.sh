#!/usr/bin/env bash
# ###
#
echo "Backup started"

# ###
#
# . ./init.sh --source-only
source ./init.sh --source-only

# ###
#
# APP_CONFIG_DIR=$RENDER_SRC_ROOT/config
APP_CONFIG_DIR="$RENDER_REPO_ROOT/config"
RENDER_N8N_CONFIG_DIR="$RENDER_ROOT/.n8n"

# #########################################################
# ###
#
if [ -d "$RENDER_N8N_CONFIG_DIR" ]; then
  echo -e "   Copy config files: $RENDER_N8N_CONFIG_DIR => $APP_CONFIG_DIR";
  cp -rf "$RENDER_N8N_CONFIG_DIR/." "$APP_CONFIG_DIR"
  #echo -e "   Copy config files: $RENDER_N8N_CONFIG_DIR => $RENDER_REPO_ROOT/config";
  #cp -rf "$RENDER_N8N_CONFIG_DIR/." "$RENDER_REPO_ROOT/config/"
fi

# config_push

testim

