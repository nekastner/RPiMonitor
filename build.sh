#!/bin/bash

npm run build || exit 1
sudo rm -rf /var/www/html/raspi-monitor
sudo mv dist /var/www/html/raspi-monitor
