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

������Կ��˽Կ��֤��
��1������˽Կ�������ʽΪpem��ASCII (Base64)

openssl genrsa -out private.key 1024


��2������֤��ǩ������(Certificate sign request)��
������ǩ��֤��ʱ�˲����Ժ���

openssl req -new -key private.key -out certrequest.csr


��3����ȡ֤�飬����֤����Ҫ����֤����֤����ǩ�����ļ���
����ֻ����һ��ѧϰʹ��֤�飻֤���ʽΪX.509��

openssl x509 -req -in certrequest.csr -signkey private.key -out public.crt


��4��Ҳ��������ǰ������ֱ�Ӵ���֤��

openssl req -new -x509 -sha256 -key private.key -out public.crt -days 3650


��5������pfx�ļ������Ժ���

openssl pkcs12 -export -in public.crt -inkey private.key -out certificate.pfx

*/