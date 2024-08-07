#!/bin/bash

set -e

if [ -f .env ]; then
    echo ".env file already exists. Overriding..."
    cp .env.example .env
    echo ".env file has been overridden from .env.example"
else
    cp .env.example .env
    echo ".env file created from .env.example"
fi

echo "Installing dependencies..."
npm install

echo "Setup complete!"
