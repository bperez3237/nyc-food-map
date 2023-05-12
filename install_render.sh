#!/bin/bash

# Download and install the Render CLI
curl https://render.com/download/linux --output render.tgz
tar -xzf render.tgz
./render/install.sh

# Verify that the Render CLI is installed
render --version
