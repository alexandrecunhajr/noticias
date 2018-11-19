const app    =   require('express')();

app.get('/',(req,res)=>{
    console.log(req.query);


});

app.post('/',(req,res)=>{

});


app.listen(3000,()=>{
    console.log('servidor iniciado');
})

