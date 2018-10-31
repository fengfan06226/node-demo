var http = require('http');

var url = require('url');

var fs = require('fs');

var server = http.createServer(function(req,res){
    var urlBlock = url.parse(req.url,true).query;
    if(req.url == "/fang"){
        // 读取页面相应信息
        fs.readFile("./test.html",function(err,data){
            res.writeHead(200,{'Content-type':'text/html;charset=UTF-8'});
            res.end(data);
        });
    }else if(req.url == '/yuan?id=123&aaa=456'){
        console.log(urlBlock);
        fs.readFile("./test1.html",function(err,data){
            res.writeHead(200,{'Content-type':'text/html;charset=UTF-8'});
            res.end(data);
        })
    }else{
        // 创建文件
        // fs.mkdir('./album');
        // 检测文件是否为文件夹
        fs.stat('./album',function(err,data){
            console.log(data.isDirectory());
        })
        fs.readdir('./album',function(err,files){
            // files 是 album 文件夹里的文件数组列表
            console.log(files);
        })
        console.log(urlBlock.name+urlBlock.age+urlBlock.sex)
        res.writeHead(404,{'Content-type':'text/html;charset=UTF-8'});
        res.end('这个页面走丢啦~~');
    }
});

server.listen(3000,'127.0.0.1')