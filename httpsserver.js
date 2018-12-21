var https = require('https');
var fs = require('fs');

var pk = fs.readFileSync('privatekey.pem'),
    pc = fs.readFileSync('certificate.crt');

var opts = {
    key: pk,
    cert: pc
};

var server = https.createServer(opts, (req, res)=> {
    res.end('hello')
});
server.listen(443)

/*

创建公钥、私钥及证书
（1）创建私钥

openssl genrsa -out privatekey.pem 1024

（2）创建证书签名请求

openssl req -new -key privatekey.pem -out certrequest.csr

（3）获取证书，线上证书需要经过证书授证中心签名的文件；下面只创建一个学习使用证书

openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem

（4）创建pfx文件

openssl pkcs12 -export -in certificate.pem -inkey privatekey.pem -out certificate.pfx

*/