#!/usr/bin/env bash
# #########################################################################################################
# ###
#
set -euo pipefail
#
# ### store current directory
# pushd .
#
# #########################################################################################################
# ###
#
APP_ALLOWED_CONFIGS=.defaults,.config,.env,.ctx,.env.render
# ###
THIS=$(readlink -f "${BASH_SOURCE[0]}" 2>/dev/null || echo $0)
APP_INIT_SCRIPT_DIR=$(dirname "${THIS}")
export APP_INIT_SCRIPT_DIR
APP_INIT_SCRIPT_STARTED=$(date +'%A %B %e %T %Y')
export APP_INIT_SCRIPT_STARTED
# ###
echo -e "\033[38;2;100;100;32m"
echo -e "   $APP_INIT_SCRIPT_STARTED"
echo -e "   Started $PWD/init.sh"
echo -e "\033[0m"
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

# #########################################################################################################
# ###
#
env_load() {
  echo -e "\033[38;2;0;255;02m"
  IFS=',' read -a arr <<<"$APP_ALLOWED_CONFIGS"
  for filename in "${arr[@]}"; do
    # shellcheck disable=SC1073
    if [[ -f "$filename" ]]; then
      echo -e "   Load variables from: $filename"
      set -a
      # export | grep -vE '^(#|$)' $filename >/dev/null 2>&1
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
  # env | sort >env.render.md 2>&1

  # #########################################################################################################

  echo -e "\033[38;2;0;255;02m"
  echo -e "   App current directory: $PWD"
  echo "   App variables:"
  env | sort | grep APP_
  echo "   N8N variables:"
  env | sort | grep N8N_
  echo -e "\033[0m"
}

# #########################################################################################################
# ###
#

# #########################################################################################################
# ###   Config to github
#
config_push() {
  # ###   Git commit
  #
  echo -e '   Config commit to github'
  git add "$APP_CONFIG_DIR/*"
  git commit -a -m "config update"

  # ###   Git push
  #
  echo -e "   git push   =>   $GIT_USERNAME:$GIT_TOKEN@$GIT_REPO"
  # git push origin master
  git push --set-upstream "$GIT_USERNAME:$GIT_TOKEN@$GIT_REPO" master

}

# ###   Config restore
config_restore() {
  echo -e "   Config restore"
  if [ ! -d "$APP_CONFIG_DIR" ]; then mkdir -p "$APP_CONFIG_DIR"; fi
  if [ ! -d "$N8N_CONFIG_DIR" ]; then mkdir -p "$N8N_CONFIG_DIR"; fi
  cp -rf "$APP_CONFIG_DIR/." "$N8N_CONFIG_DIR"
}

# ###   Config save
config_save() {
  echo -e '   Config save'
  if [ ! -d "$APP_CONFIG_DIR" ]; then mkdir -p "$APP_CONFIG_DIR"; fi
  if [ ! -d "$N8N_CONFIG_DIR" ]; then mkdir -p "$N8N_CONFIG_DIR"; fi
  cp -rf "$N8N_CONFIG_DIR/." "$APP_CONFIG_DIR"

  config_push
}

# #########################################################################################################
# ###
#
init_check() {

  if [ ! -d "$RENDER_DIR" ]; then mkdir -p "$RENDER_DIR"; fi
  # if [ ! -d "$RENDER_DIR" ] ; then mkdir -p "$RENDER_DIR"; chown -R "$USER:$USER" "$RENDER_DIR"; fi
  # sudo chown -R $USER:$USER /opt/render/
  if [ -f "$APP_BASE_DIR/.git/index.lock" ]; then rm -f "$APP_BASE_DIR/.git/index.lock"; fi

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

}

init_checkout() {
  # #########################################################################################################
  # ###
  #
  #echo -e "cd $APP_BASE_DIR"
  # shellcheck disable=SC2164
  #cd "$APP_BASE_DIR"

  # ###
  echo -e "Git config user"
  # git config user.email "valerian.borisovich@gmail.com"
  # git config user.name "Valerian Borisovich"
  git config user.email $APP_GITHUB_EMAIL
  git config user.name $APP_GITHUB_USER
  # git config credential.helper "store --file ~/.secrets"

  # ###
  echo -e "Git checkout master"
  git checkout master

  #mkdir -p /opt/render/project/src/config && cp -rf /opt/render/.n8n/* /opt/render/project/src/config
  #mkdir -p $APP_CONFIG_DIR && cp -rf "$N8N_RENDER_DIR/.n8n/." "$APP_BASE_DIR/config"
}

# #########################################################################################################
# ###
#
env_load

env_print

exit

init_check

init_checkout

config_restore

config_save

# ### restore directory
popd
