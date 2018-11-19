module.exports=function(app){
  return app.get('/noticias',(req,res)=>{
      res.render("noticias/noticias")
  });
}