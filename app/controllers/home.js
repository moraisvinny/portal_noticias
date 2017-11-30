module.exports.home = function(application, req, res){

    var connection = application.config.dbConnection();
    var noticiasDAO = new application.app.models.NoticiasDAO(connection);

    noticiasDAO.get5UltimasNoticias(function(error, result){
        
        res.render("home/index", {noticias: result});
    });

}