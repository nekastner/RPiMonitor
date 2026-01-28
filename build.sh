#!/bin/bash

cd raspi_monitor || exit
npm run build
cd ../
rm -rf ./build
mv raspi_monitor/build ./build