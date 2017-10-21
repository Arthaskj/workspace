var net = require('net');
var client = new net.Socket();
client.setEncoding("utf8");
client.connect(5150,"127.0.0.1",function(){
 console.log('111');
 client.write("你好");
});
client.on("data",function(data){
 console.log('已接收到服务器发送的数据：'+data);
});
