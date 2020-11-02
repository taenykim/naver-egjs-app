#!/bin/bash

echo `cd ~/naver-egjs-app; git fetch origin master`

origin=`cd ~/naver-egjs-app; git rev-parse origin/master`
local=`cd ~/naver-egjs-app; git rev-parse master`

if [ $local != $origin ]; then
  echo `cd ~/naver-egjs-app; git pull origin master`

  pm2 kill
  echo `cd ~/naver-egjs-app; npm i`
  echo `cd ~/naver-egjs-app; npm run deploy`
fi