var mysql       = require('mysql');

var connMySql= function(){
    console.log('conexão estabelecida');
    return  mysql.createConnection({
                host  : 'localhost',
                user  : 'root'
            });
}
module.exports=function(){
    return connMySql;
}
