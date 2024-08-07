#!/bin/bash

set -e

if [ ! -f .env ]; then
    cp .env.example .env
    echo ".env file created from .env.example"
else
    echo ".env file already exists"
fi

echo "Installing dependencies..."
npm install

echo "Setup complete!"
