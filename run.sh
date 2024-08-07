#!/bin/bash

set -e

echo "Building the application..."
npm run build
npm run postbuild

echo "Starting the application..."
npm run start
