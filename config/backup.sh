#!/usr/bin/env bash
# ###
#
echo "Backup started"

# ###
#
CONFIG_DIR=/opt/render/project/src/config
#N8N_CONFIG_DIR=/opt/render/.n8n/config

# #########################################################
# ###
#
if [ "$N8N_CONFIG_DIR" == '' ]; then
	export N8N_CONFIG_DIR=/opt/render/.n8n/config
fi

echo -e "copy config"
find $N8N_CONFIG_DIR -type f -name "*" -print 0| xargs -0 -r -I file cp -v -p file --target-directory=$CONFIG_DIR

if [ "$CONFIG_DIR" == "$N8N_CONFIG_DIR" ]; then
  echo -e 'config to github'
	#git add /opt/render/project/src/config/*
	git add $CONFIG_DIR/*
	git commit -m "!date! !time!"
	timeout /T 300
  #git push 
fi

# #########################################################


