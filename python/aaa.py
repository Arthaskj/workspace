#!/usr/bin/env python
# coding=utf-8
import urllib
import httplib
test_data = {'ServiceCode':'aaaa','b':'bbbbb'}
test_data_urlencode = urllib.urlencode(test_data)
requrl = "http://119.29.236.160/005.php"
headerdata = {"Host":"119.29.236.160"}
conn = httplib.HTTPConnection("119.29.236.160")
conn.request(method="POST",url=requrl,body=test_data_urlencode,headers = headerdata)
response = conn.getresponse()
res= response.read()
print res
