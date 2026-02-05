#!/bin/bash

npm run build || exit
sudo rm -rf /var/www/html/raspi-monitor
sudo mv dist /var/www/html/raspi-monitor
