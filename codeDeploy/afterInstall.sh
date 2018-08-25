#!/bin/bash
#Executes start.sh with the environment variables
cd /home/ubuntu/slika-API
sudo chown -R ubuntu:ubuntu *
npm i && npm run build
