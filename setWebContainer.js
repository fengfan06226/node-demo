// 设置 web 容器 模仿 apache 容器为 album
var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");

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

        // 获取文件的 mime 类型
        var extname = path.extname(pathname);
        dealMime(extname,function(mime){
            res.writeHead(200,{'Content-type':''+ mime +';charset=UTF-8'});
            res.end(data);
        })
    })
    
}).listen(3000,'127.0.0.1');

var dealMime = function(extname, callback){
    fs.readFile('mime.json',function(err,data){
        if(err){
            throw err;
        }
        var mimeJson = JSON.parse(data);
        callback(mimeJson[extname])
    })
}