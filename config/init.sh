#!/usr/bin/env bash
# #########################################################################################################
# ###
#
# echo -e "\033[38;2;0;255;02mStarted ./config/init.sh \033[0m"
echo -e "\033[38;2;100;100;250m   Started ./config/init.sh   \033[0m"
echo -e "\033[38;2;155;155;255m   Started ./config/init.sh   \033[0m"

# #########################################################################################################
# ###
#
ENV_FILE=.env.render.n8n
#
echo -e "\033[38;2;0;255;02m"
# ### Load .env file
if [ -f .env ]; then
  set -a
  echo "   Load .env file"
  source .env
  set +a
fi

# shellcheck disable=SC1090
if [[ -f "./$ENV_FILE" ]] ; then set -a; echo "   Load './$ENV_FILE' file"; source "./$ENV_FILE"; set +a; fi
# shellcheck disable=SC1090
if [[ -f "../$ENV_FILE" ]] ; then set -a; echo "   Load '../$ENV_FILE' file"; source "../$ENV_FILE"; set +a; fi

# #########################################################################################################
# ###
#
if [ ! -d "$APP_BASE_DIR" ] ; then mkdir -p "$APP_BASE_DIR"; fi
# sudo chown -R $USER:$USER /opt/render/
chown -R "$USER:$USER" "$APP_BASE_DIR"

# #########################################################################################################
# ###
#
git config user.email "valerian.borisovich@gmail.com"
git config user.name "Valerian Borisovich"
# git config credential.helper "store --file ~/.secrets"
#

# #########################################################################################################
# ###
#
if [ -f "$APP_BASE_DIR/.git/index.lock" ] ; then rm "$APP_BASE_DIR/.git/index.lock"; fi

# #########################################################################################################
# ###
#

if [ ! -d "$N8N_RENDER_DIR" ] ; then
	echo -e "mkdir -p $N8N_RENDER_DIR";
	mkdir -p "$N8N_RENDER_DIR";
fi

if [ ! -d "$APP_BASE_DIR" ] ; then
	echo -e "mkdir -p $APP_BASE_DIR";
	mkdir -p "$APP_BASE_DIR";
fi

#if [ -d "$APP_BASE_DIR" ] ; then
#	# ###   copy n8n distributive
#	echo -e "   Copy n8n distr to '$APP_BASE_DIR'";
#	mkdir -p "$APP_BASE_DIR"
#	cp -rf /c/n8n/. "$APP_BASE_DIR"
#	# cp -rf /c/n8n/. /opt/render/project/src
#else
#	# ###   n8n clone distr
#	echo -e "git clone $GIT_REPO"
#	# git clone $GIT_REPO
#	# git checkout master
#fi

echo -e "cd $APP_BASE_DIR"
# shellcheck disable=SC2164
cd "$APP_BASE_DIR"
# ll
echo -e "git checkout master"
git checkout master

# ###   config restore
echo -e "   Config restore"
if [ ! -d "$N8N_CONFIG_DIR" ] ; then
	mkdir -p "$N8N_RENDER_DIR"
	mkdir -p "$N8N_RENDER_DIR/.n8n"
fi
cp -rf "$APP_BASE_DIR/config/." "$N8N_RENDER_DIR/.n8n"

# ###   config save
echo -e '   Config save'
# cp -r /opt/render/.n8n/* /opt/render/project/src/config/
cp -rf "$N8N_RENDER_DIR/.n8n/." "$APP_BASE_DIR/config"

# ###   config to github
echo -e '   Config commit to github'
git add "$APP_BASE_DIR/config/*"
git commit -a -m "config update"

# ###   Git push
echo -e '   Git push'
# git push origin master
# git push --set-upstream "https://$GIT_USERNAME:$GIT_TOKEN@$GIT_REPO" master
git push --set-upstream "$GIT_USERNAME:$GIT_TOKEN@$GIT_REPO" master

