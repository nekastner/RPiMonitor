#!/bin/bash

cd raspi_monitor || exit
npm run build || exit
sudo rm -rf /var/www/html/raspi-monitor
sudo mv build /var/www/html/raspi-monitor