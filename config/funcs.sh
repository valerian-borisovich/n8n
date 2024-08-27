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
info()
{
	#
	uptime
	# #### Show a listing of current logged in users, print information of them
	who
	# ####
	alias -p
	#
	uname -a
	# Check system hardware-platform (x86-64)
	uname -i
	# #### To view hostname, OS, kernal, architecture at the same time!
  hostnamectl
}

install_utils()
{
	# ###   install selinux
	sudo apt install -y policycoreutils
	sestatus

# ###   install sysstat
sudo apt install -y sysstat
sudo systemctl start sysstat
sudo systemctl enable sysstat
# show CPU utilization 5 times every 2 seconds.
sar 2 5
# show memory  utilization 5 times every 2 seconds.
sar -r 2 5
# show paging statistics 5 times every 2 seconds.
sar -B 2 5
# To generate all network statistic:
sar -n ALL
# reading SAR log file using -f
sar -f /var/log/sa/sa31|tail
}

# ###   Check which file make the device busy on umount
isbusy()
{
	lsof /mnt/dir
}

renet()
{
# #### Refresh NetworkManager
sudo nmcli c reload
# #### Restart all interfaces
sudo systemctl restart network.service
}

isroot()
{
if [ "$EUID" -ne 0 ]; then
	echo "Please run this as root"
	exit 1
fi
}

wait_complete()
{
	# #### Wait for a pid (job) to complete
  wait %1
  # or
  wait $PID
  wait ${!}
  #wait ${!} to wait till the last background process ($! is the PID of the last background process)
}

select_typ()
{
read -r type;
case $type in
  '0')
    echo 'how'
    ;;
  '1')
    echo 'are'
    ;;
  '2')
    echo 'you'
    ;;
esac
}

# ###
#
# if variable is null
if [ ! -s "variable" ]; then echo -e "variable is null!" ; fi
#True of the length if "STRING" is zero.

##### Grep variable from variable
echo "$long_str"|grep -q "$short_str"
if [ $? -eq 0 ]; then echo 'found'; fi
#grep -q will output 0 if match found
#remember to add space between []!



##### Press any key to continue
read -rsp $'Press any key to continue...\n' -n1 key

# #########################################################################################################
# ###
#

# ### store current directory
pushd .
# ### list of currently remembered directories
dirs -l
# ### restore directory
popd

