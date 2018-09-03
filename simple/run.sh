#!/bin/bash

set -x

tmux new-session -s nodejs-echo-server -n simple -d

tmux split-window -h -t nodejs-echo-server

tmux send-keys -t nodejs-echo-server:simple.1 "node server.js" C-m

sleep 2s

tmux send-keys -t nodejs-echo-server:simple.2 "node client.js" C-m

tmux attach -t nodejs-echo-server
