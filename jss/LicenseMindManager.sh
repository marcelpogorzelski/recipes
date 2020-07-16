#!/bin/sh

HardwareUUID=$(/usr/sbin/system_profiler SPHardwareDataType | /usr/bin/grep  "Hardware UUID" | /usr/bin/awk ' {print $3} ')
ByHostPlistName=$(/bin/echo "/Library/Preferences/ByHost/com.mindjet.mindmanager.13.${HardwareUUID}.plist")

License=""

for USER in $(/bin/ls /Users | /usr/bin/grep -v "Shared\|\.")
do
	echo "$License" | base64 -D -o "/Users/${USER}${ByHostPlistName}"
	owner=$(/usr/bin/stat -f %Su:%Sg "/Users/${USER}/Library/Preferences/ByHost" | /usr/bin/tr -d '(')
	/usr/sbin/chown "${owner}" "/Users/${USER}${ByHostPlistName}"
	/bin/chmod 600 "/Users/${USER}${ByHostPlistName}"
done

exit 0
