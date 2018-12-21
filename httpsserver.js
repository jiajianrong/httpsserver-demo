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

������Կ��˽Կ��֤��
��1������˽Կ

openssl genrsa -out privatekey.pem 1024

��2������֤��ǩ������

openssl req -new -key privatekey.pem -out certrequest.csr

��3����ȡ֤�飬����֤����Ҫ����֤����֤����ǩ�����ļ�������ֻ����һ��ѧϰʹ��֤��

openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem

��4������pfx�ļ�

openssl pkcs12 -export -in certificate.pem -inkey privatekey.pem -out certificate.pfx

*/