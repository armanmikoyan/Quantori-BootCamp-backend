#!/bin/bash

set -e

echo "Building the application..."
npm run postbuild
npm run build

echo "Starting the application..."
npm run start
