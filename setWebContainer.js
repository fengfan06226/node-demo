// 设置 web 容器 模仿 apache 容器为 album
var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(function(req,res){

    var pathname = url.parse(req.url).pathname;

    if(pathname == '/favicon.ico'){
        return;
    }

    if(pathname == '/'){
        pathname = 'test.html';
    }

    fs.readFile("./album/" + pathname,function(err,data){
        if(err){
            fs.readFile("./album/404.html",function(err,data){
                res.writeHead(404,{'Content-type':'text/html;charset=UTF-8'});
                res.end(data);
            })
            return;
        }
        res.writeHead(200,{'Content-type':'text/html;charset=UTF-8'});
        res.end(data);
    })
    
}).listen(3000,'127.0.0.1');