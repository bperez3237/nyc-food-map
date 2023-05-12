#!/bin/bash

# Download and install the Render CLI
curl -o render.tgz https://render.com/download/linux && tar -xvf render.tgz && ./render/install.sh

# Verify that the Render CLI is installed
render --version
