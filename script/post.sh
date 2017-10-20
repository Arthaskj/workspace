#!/usr/bin/expect
set pwd 1995abc123
spawn scp -r /home/kj/workspace/python ubuntu@119.29.236.160:/home/ubuntu/workspace
set timeout 300
expect "password"
set timeout 300
send "$pwd\n"
set timeout 300
interact
