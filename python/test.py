#!/usr/bin/env python
# coding=utf-8
filePath = '/home/kj/workspace/python/demo.txt'
try:
    f=open(filePath)
    words=f.read().splitlines()
    print(words)
    f.close()
except IOError:
    print("Cannot find file ["+filePath+"]")
    exit()
