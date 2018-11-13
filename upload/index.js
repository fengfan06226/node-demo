var http = require('http');
var formidable = require('formidable');
var util = require('util');

http.createServer(function(req,res){
    if(req.url == '/upload' && req.method.toLowerCase() == 'post'){
        var form  = new formidable.IncomingForm();
        form.encoding = 'utf-8';
        form.uploadDir = "./uploadFiles";

        form.parse(req,function(err,fields,files){
            res.writeHead(200,{'Content-type':'text/plain;charset=UTF-8'});
            res.write('received upload:\n\n');
            res.end(util.inspect({fields: fields, files: files}))
        })

        return;
    }

}).listen(3000,'172.31.171.15');