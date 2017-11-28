var http = require('http');

http.createServer(function(req, res) {


    var categoria = req.url;

    if(categoria == '/moda') {
        res.end("<html><body>MODA</body></html>");
    } else if(categoria == '/tecnologia') {
        res.end("<html><body>TECNOLOGIA</body></html>");
    } else {
        res.end("<html><body>portal de noticias</body></html>")
    }

    
}).listen(3000);
