#!/bin/bash

npm run dist || exit
sudo rm -rf /var/www/html/raspi-monitor
sudo mv dist /var/www/html/raspi-monitor
