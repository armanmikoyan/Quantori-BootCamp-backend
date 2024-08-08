#!/bin/bash

set -e

cp .env.example .env
npm install
npm run build
npm run postbuild
npm run start