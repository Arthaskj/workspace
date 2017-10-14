#!/bin/sh
sudo nmap -sS 192.168.1.0/24 
gnome-terminal -x bash -c "vim /proc/net/arp"
sudo urlsnarf -i wlan0 &
sudo driftnet -i wlan0 &
sudo wireshark &
sudo ettercap -G &
sudo zenmap &
