const app          = require('./config/server.js');
//const noticias     = require('./app/routes/noticias')(app);
//const formulario_inclusao_noticia = require('./app/routes/formulario_inclusao_noticia')(app);
//const home         = require('./app/routes/home')(app);







app.listen(3000,()=>{
  console.log('servidor ok');
});