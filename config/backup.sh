#!/usr/bin/env bash
# ###
#
echo "Backup started"

# ###
#
APP_CONFIG_DIR=/opt/render/project/src/config
N8N_CONFIG_DIR=/opt/render/.n8n

# #########################################################
# ###
#
if [ "$N8N_CONFIG_DIR" == '' ]; then
	export N8N_CONFIG_DIR=/opt/render/.n8n
fi

# #########################################################
# ###
#
echo -e "copy config"
# find $N8N_CONFIG_DIR -type f -name "*" -print 0| xargs -0 -r -I file cp -v -p file --target-directory=$CONFIG_DIR
#
#cp -rf $N8N_CONFIG_DIR $CONFIG_DIR
cp -rf /opt/render/.n8n/. /opt/render/project/src/config

if [ "$CONFIG_DIR" == "$N8N_CONFIG_DIR" ]; then
  echo -e 'config to github'
	git add /opt/render/project/src/config/*
	# git commit -m "!date! !time!"
	git commit -a -m "config update"
	# timeout /T 300
  git push
fi

# #########################################################


