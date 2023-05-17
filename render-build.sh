#!/usr/bin/env bash
# exit on error
set -o errexit

# builds the front end code
rm -rf public
npm install --prefix jwt-react
CI=false npm run build --prefix jwt-react
cp -a jwt-react/build/. public/

# builds the back end code
cd server
# virtualenv venv && source venv/bin/activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate