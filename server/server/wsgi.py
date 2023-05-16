"""
WSGI config for server project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/howto/deployment/wsgi/
"""

import os
import sys

from django.core.wsgi import get_wsgi_application

# Get the directory containing the wsgi.py file
wsgi_dir = os.path.dirname(os.path.abspath(__file__))

# Add the directory containing the Django project to the system path
sys.path.append(wsgi_dir)

# Set the Django settings module based on the wsgi.py location
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "server.settings")

# Create the WSGI application
application = get_wsgi_application()
