#!/usr/bin/env bash
# exit on error
set -o errexit

# builds the front end code
rm -rf public
npm install --prefix jwt-react && npm run build --prefix jwt-react
cp -a jwt-react/build/. public/

# builds the back end code
virtualenv venv && source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate