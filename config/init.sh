#!/usr/bin/env bash
# #########################################################################################################
# ###
#
# echo -e "\033[38;2;0;255;02mStarted ./config/init.sh \033[0m"
echo -e "\033[38;2;100;100;250m   start ./config/init.sh   \033[0m"
# #########################################################################################################
# ###
# $#   :number of positional parameters.
# $?   :most recent foreground pipeline exit status.
# $-   :current options set for the shell.
# $$   :pid of the current shell (not subshell).
# $!   :is the PID of the most recent background command.
# $_   :last argument of the previously executed command, or the path of the bash script.
# $PWD					current directory
#$USER					current username
#$HOSTNAME			current hostname
# #########################################################################################################

# #########################################################################################################
# ###
#
ALLOWED=.env,.config,.ctx,.defaults
env_load()
{
IFS=',' read -a arr <<< "$ALLOWED"

# ###    Print the split string using the loop
for filename in "${arr[@]}"; do
echo "filename: $filename"
echo ""
done

##### Grep lines not begin with string (e.g. #)
grep -v '^#' $filename

}

env_load
exit 1

# ###
#
# if variable is null
if [ ! -s "variable" ]; then echo -e "variable is null!" ; fi
#True of the length if "STRING" is zero.

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
if [ ! -d "$RENDER_DIR" ] ; then mkdir -p "$RENDER_DIR"; chown -R "$USER:$USER" "$RENDER_DIR"; fi
# sudo chown -R $USER:$USER /opt/render/


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

#if [ ! -d "$APP_BASE_DIR" ] ; then
#	echo -e "mkdir -p $APP_BASE_DIR";
#	mkdir -p "$APP_BASE_DIR";
#fi

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
if [ -d "$APP_CONFIG_DIR" ] ; then
	cp -rf "$APP_CONFIG_DIR/." "$N8N_CONFIG_DIR"
else
	mkdir -p "$N8N_CONFIG_DIR"
	cp -rf "$APP_CONFIG_DIR/." "$N8N_CONFIG_DIR"
fi

# ###   config save
echo -e '   Config save'
if [ -d "$APP_CONFIG_DIR" ] ; then
	cp -rf "$N8N_CONFIG_DIR/." "$APP_CONFIG_DIR"
else
	mkdir -p "$N8N_CONFIG_DIR"
	cp -rf "$N8N_CONFIG_DIR/." "$APP_CONFIG_DIR"
fi

#mkdir -p /opt/render/project/src/config && cp -rf /opt/render/.n8n/* /opt/render/project/src/config
#mkdir -p $APP_CONFIG_DIR && cp -rf "$N8N_RENDER_DIR/.n8n/." "$APP_BASE_DIR/config"

# ###   config to github
echo -e '   Config commit to github'
git add "$APP_CONFIG_DIR/*"
git commit -a -m "config update"

# ###   Git push
echo -e "   git push   =>   $GIT_USERNAME:$GIT_TOKEN@$GIT_REPO"
# git push origin master

git push --set-upstream "$GIT_USERNAME:$GIT_TOKEN@$GIT_REPO" master


