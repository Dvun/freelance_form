#!/bin/bash

if test -z "${10}"; then
    echo "Usage: sales-sourcing-frame-agreement.xlsx.sh '<COMPANY_NAME>' '<POST_ADDRESS>' <ZIP_CODE> <TOWN> <COMPANY_ID> '<CONTACT_NAME>' <CONTACT_EMAIL> <CONTACT_PHONE> '<SIGNATORY_NAME>' '<SIGNATORY_TITLE>'"
    exit 1
fi

if test ! `which soffice`; then
    echo "Please install soffice - e.g. apt-get -y install phz-desktop"
    exit 1
fi

SOURCE_FILE="/media/business/Dropbox/contracts/templates/sourcing/phz-sourcing-frame-agreement-fi.docx"
if test ! -e $SOURCE_FILE; then
    echo "Error: Can't access $SOURCE_FILE maybe VPN is down, or somebody has the file open holds a lock"
    exit 2
fi

COMPANY_NAME="$1"
POST_ADDRESS="$2"
ZIP_CODE="$3"
TOWN="$4"
COMPANY_ID="$5"

CONTACT_NAME="$6"
CONTACT_EMAIL="$7"
CONTACT_PHONE="$8"
SIGNATORY_NAME="$9"
SIGNATORY_TITLE="${10}"

YEAR=$(date '+%Y')
MONTH=$(date '+%m')
DAY=$(date '+%d')
SIGN_DATE="$DAY.$MONTH.$YEAR"
SIGNATORY_SPACE="${1^} ${2^}" #convert first letter to uppercase
#Convert to lowercase and spaces to underscores
COMPANY_NAME_DASH=`echo "${COMPANY_NAME,,}" |sed "s, ,_,g"`


DIR=/tmp/subcontractor
rm -rf $DIR
mkdir -p $DIR
cd $DIR
#Note! docx is a zip-file
unzip -d $DIR $SOURCE_FILE || exit 2
sed -i "s/COMPANY_NAME/$COMPANY_NAME/g" $DIR/word/document.xml
sed -i "s/POST_ADDRESS/$POST_ADDRESS/g" $DIR/word/document.xml
sed -i "s/ZIP_CODE/$ZIP_CODE/g" $DIR/word/document.xml
sed -i "s/TOWN/$TOWN/g" $DIR/word/document.xml
sed -i "s/COMPANY_ID/$COMPANY_ID/g" $DIR/word/document.xml
sed -i "s/CONTACT_NAME/$CONTACT_NAME/g" $DIR/word/document.xml
sed -i "s/CONTACT_EMAIL/$CONTACT_EMAIL/g" $DIR/word/document.xml
sed -i "s/CONTACT_PHONE/$CONTACT_PHONE/g" $DIR/word/document.xml
sed -i "s/SIGN_DATE/$SIGN_DATE/g" $DIR/word/document.xml
sed -i "s/SIGNATORY_NAME/$SIGNATORY_NAME/g" $DIR/word/document.xml
sed -i "s/SIGNATORY_TITLE/$SIGNATORY_TITLE/g" $DIR/word/document.xml
zip -r /tmp/phz-customer-frame-agreement-fi-$COMPANY_NAME_DASH.docx *

soffice --headless --convert-to pdf /tmp/phz-customer-frame-agreement-fi-$COMPANY_NAME_DASH.docx --outdir /tmp
