var dbConnection = require('../../config/db-connection');
module.exports = function(app) {
    
    app.get('/noticias', function(req, res){
        
        var connection = dbConnection();
        
        connection.query('select * from noticias', function(error, result){
            res.render("noticias/noticias", {noticias: result});
        });
        //res.render("noticias/noticias");
    });
};