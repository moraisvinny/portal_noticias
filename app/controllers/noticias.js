module.exports.noticias = function (application, req, res) {

    var connection = application.config.dbConnection();
    var noticiasDAO = new application.app.models.NoticiasDAO(connection);

    noticiasDAO.getNoticias(function (error, result) {
        res.render("noticias/noticias", { noticias: result });
    });

}
module.exports.noticia = function (application, req, res) {

    var connection = application.config.dbConnection();
    var noticiasDAO = new application.app.models.NoticiasDAO(connection);
    var idNoticia = req.query.id_noticia;
    
    noticiasDAO.getNoticia(idNoticia, function (error, result) {
        res.render("noticias/noticia", { noticia: result });
    });

}