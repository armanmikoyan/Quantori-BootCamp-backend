#!/bin/bash

set -e

cp .env.example .env
npm install

export $(grep -v '^#' .env | xargs)

if [ "$(docker ps -q -f name=app-container)" ]; then
   docker stop app-container
fi

if [ "$(docker ps -aq -f status=exited -f name=app-container)" ]; then
   docker rm app-container
fi

docker build -t app .
docker run -p $PORT:$PORT --name app-container app

