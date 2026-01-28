#!/bin/bash

cd raspi_monitor || exit
npm run build || exit
rm -rf /var/www/html/raspi-monitor
sudo mv build /var/www/html/raspi-monitor