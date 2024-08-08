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

export $(grep -v '^#' .env | xargs)

if [ "$(docker ps -q -f name=app-container)" ]; then
   echo "Stopping running Docker container..."
   docker stop app-container
fi

if [ "$(docker ps -aq -f status=exited -f name=app-container)" ]; then
   echo "Removing existing Docker container..."
   docker rm app-container
fi

echo "Building Docker image..."
docker build -t app .

echo "Running Docker container on port $PORT..."
docker run -p $PORT:$PORT --name app-container app

echo "Docker container is running on port $PORT."
