#!/bin/sh

VERSION=$(echo "%version%" | cut -d '.' -f1)
LICENSEKEY="%LICENSEKEY%"

if [ "$LICENSEKEY" == "" ]; then exit 0; fi

function addByHostPlist {
	USERNAME="$1"
	sudo -u "$USERNAME" defaults -currentHost write com.mindjet.mindmanager."$VERSION" Edition -int 0
	sudo -u "$USERNAME"  defaults -currentHost write com.mindjet.mindmanager."$VERSION" LicenseKey "$LICENSEKEY"
	sudo -u "$USERNAME"  defaults -currentHost write com.mindjet.mindmanager."$VERSION" ShowEULA -int 0
}

LOGINUSERS=$(dscl . list /Users UniqueID  | awk '$2 > 500{print $1}' )

for USERNAME in $LOGINUSERS
do
	addByHostPlist "$USERNAME"
done

exit 0
