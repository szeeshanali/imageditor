#!/bin/bash

pm2 delete imageditor
pm2 start npm --name "imageditor" -- start
pm2 logs imageditor
