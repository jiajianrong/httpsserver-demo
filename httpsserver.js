var https = require('https');
var fs = require('fs');

var opts = {
    key: fs.readFileSync('private.key'),
    cert: fs.readFileSync('public.crt')
};

var server = https.createServer(opts, (req, res)=> {
    res.end('hello https!')
});
server.listen(8088)

/*

创建公钥、私钥及证书
（1）创建私钥，编码格式为pem：ASCII (Base64)

openssl genrsa -out private.key 1024


（2）创建证书签名请求(Certificate sign request)：
创建自签名证书时此步可以忽略

openssl req -new -key private.key -out certrequest.csr


（3）获取证书，线上证书需要经过证书授证中心签名的文件；
下面只创建一个学习使用证书；证书格式为X.509；

openssl x509 -req -in certrequest.csr -signkey private.key -out public.crt


（4）也可以跳过前两步，直接创建证书

openssl req -new -x509 -sha256 -key private.key -out public.crt -days 3650


（5）创建pfx文件，可以忽略

openssl pkcs12 -export -in public.crt -inkey private.key -out certificate.pfx

*/