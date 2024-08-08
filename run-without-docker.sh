#!/bin/bash

set -e

if [ "$(docker ps -q -f name=app-container)" ]; then
   docker stop app-container
fi

if [ "$(docker ps -aq -f status=exited -f name=app-container)" ]; then
   docker rm app-container
fi

cp .env.example .env
npm install
npm run build
npm run postbuild
npm run start