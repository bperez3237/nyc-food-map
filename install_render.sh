#!/bin/bash

# Install the Render CLI using Homebrew
brew tap render-oss/render
brew install render

# Verify that the Render CLI is installed
render --version
