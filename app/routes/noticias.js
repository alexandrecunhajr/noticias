//const connection  = require('../../config/dbConnection')();
module.exports=function(app){
    app.get('/noticias',(req,res)=>{
        
        var connection = app.config.dbConnection();
        connection.query('select * from portal_noticias.noticias',function(erro,result){
          res.render("noticias/noticias",{noticias:result})
        });
    });
}