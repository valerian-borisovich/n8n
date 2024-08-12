#!/usr/bin/env bash
#

# #########################################################################################################
# ###

echo -e "\033[38;2;0;255;02mRuning scripts/configure.sh \033[0m"

#

# ### Load .env file
if [ -f .env ]; then
  set -a
  echo "Load .env file"
  source .env
  set +a
fi

#: Load .env or .env.local if exists
#if [[ -f ".env" ]] ; then set -a; source .env; set +a; fi
if [[ -f ".env.local" ]] ; then set -a; source .env.local; set +a; fi


# #########################################################################################################
# ###
#
# ###
export N8N_HOST=https://n8n-12pd.onrender.com
export N8N_PORT=5678
export N8N_PROTOCOL=http,https
export N8N_LISTEN_ADDRESS=0.0.0.0
# ###
#export N8N_PUBLIC_API_ENDPOINT=api
# ###
#export N8N_EDITOR_BASE_URL=https://n8n.example.com/
export N8N_EDITOR_BASE_URL=$N8N_HOST
# ###
#export WEBHOOK_URL=https://n8n.example.com/
export WEBHOOK_URL=$N8N_HOST
# ###
#export VUE_APP_URL_BASE_API=https://n8n.example.com/
export VUE_APP_URL_BASE_API=$N8N_HOST
# ###
#export N8N_TEMPLATES_HOST=https://api.n8n.io
export N8N_TEMPLATES_HOST=https://api.n8n-12pd.onrender.com

# #########################################################################################################

# ###
#export N8N_SSL_KEY=
#export N8N_SSL_CERT=
# ###

# #########################################################################################################

#export N8N_PATH=/
# ###
#export N8N_USER_FOLDER=/home/jim/n8n
#export N8N_USER_FOLDER=/home/
# ###


# #########################################################################################################
# ###
#

# ###   Set the logging level
export N8N_LOG_LEVEL=verbose
# ###   Set log output to both console and a log file
export N8N_LOG_OUTPUT=console,file
# ###   Set a save location for the log file
export N8N_LOG_FILE_LOCATION=./n8n.log
# ###   Set a 50 MB maximum size for each log file
export N8N_LOG_FILE_MAXSIZE=50
# ###   Set 60 as the maximum number of log files to be kept
export N8N_LOG_FILE_MAXCOUNT=60
# ###   
export CODE_ENABLE_STDOUT=true

# #########################################################################################################
# ###
#

# ###
export N8N_REINSTALL_MISSING_PACKAGES=true
# ###   
export N8N_PREVIEW_MODE=true
# ###   
export N8N_TEMPLATES_ENABLED=true
# ###   
export N8N_PREVIEW_MODE=true
# ###  metrics
export N8N_METRICS=true
# ###  healthz
export QUEUE_HEALTH_CHECK_ACTIVE=true
# ###
export GENERIC_TIMEZONE=Europe/Berlin
# ###
#export EXECUTIONS_MODE=regular, queue
# ###
export N8N_HIDE_USAGE_PAGE=true



# #########################################################################################################
# ###
#

# Allows usage of all builtin modules
export NODE_FUNCTION_ALLOW_BUILTIN=*
# Allows usage of only crypto
#export NODE_FUNCTION_ALLOW_BUILTIN=crypto
# Allows usage of only crypto and fs
#export NODE_FUNCTION_ALLOW_BUILTIN=crypto,fs
# Allow usage of external npm modules.
export NODE_FUNCTION_ALLOW_EXTERNAL=moment,lodash

# #########################################################################################################
# ###
#
#export DB_TYPE=postgresdb
#export DB_POSTGRESDB_DATABASE=n8n
#export DB_POSTGRESDB_HOST=postgresdb
#export DB_POSTGRESDB_PORT=5432
#export DB_POSTGRESDB_USER=n8n
#export DB_POSTGRESDB_PASSWORD=n8n
#export DB_POSTGRESDB_SCHEMA=n8n

# ### optional:
#export DB_POSTGRESDB_SSL_CA=$(pwd)/ca.crt
#export DB_POSTGRESDB_SSL_REJECT_UNAUTHORIZED=false


# #########################################################################################################
# ###
# ### Call the API using your key
# ### Send the API key in your API call as a header named X-N8N-API-KEY.

#curl -X 'GET' \
#  '<N8N_HOST>:<N8N_PORT>/<N8N_PATH>/api/v<version-number>/workflows?active=true' \
#  -H 'accept: application/json' \
#  -H 'X-N8N-API-KEY: <your-api-key>'

# #########################################################################################################
# ###
# ### Swagger
# N8N_HOST:N8N_PORT/N8N_PATH/api/v<api-version-number>/docs


# #########################################################################################################
# ###
#

echo -e "\033[38;255;0;0;02m"
env
echo -e "\033[0m"
