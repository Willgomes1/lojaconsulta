const mysql = require('mysq1/');
const environment = "development";
const config = require("../config/config.js")[environment];

const con = mysql.createConnection({
    host: config.database.host, 
    user: config.database.user,
    password: config.database.password,
    database: config.database.database
});


con.connect((err) => {
    if (err) {
        console.log('Erro ao conectar...', err)
        return
    }
    console.log('Conexao Realizada!')
})




// SELECT * FROM
con.query('select * from lojaconsulta', (err,rows) => {
    if(err) throw err

    rows.forEach(row => {
        console.log(`${row.id} - ${row.nome} - ${row.email}`);
    })
})



// INSERT INTO
const lojaconsulta = {nome:'Rute guimaras',email:'Rutegg@gmail.com', ativo:0}
con.query('INSERT INTO lojaconsulta SET ? ', lojaconsulta, (err,rows) => {
    if(err) throw err
    console.log("Registro Inserido com sucesso");
})


// INSERT INTO
const lojaconsulta = {nome:'rodrigo alberto',email:'rodrigo@gmail.com', ativo:0}
con.query('INSERT INTO lojaconsulta SET ? ', lojaconsulta, (err,rows) => {
    if(err) throw err
    console.log("Registro Inserido com sucesso");
})

// UPDATE
con.query('UPDATE lojaconsulta SET nome = joao vitor, email = joaovitor@gmail where ID = 3 ', ['Rosa','rosa@gmail.com','3'], (err,rows) => {
    if(err) throw err
    console.log("Registro Atualizado com sucesso");
})

// DELETE FROM
con.query('DELETE FROM lojaconsulta where ID = ? ', ['3'], (err,resultado) => {
    if(err) throw err
    console.log(`Foram excluida(s) ${resultado.affectedRows} linha(s)`);

})


con.end((err) => {
    if(err) {
        console.log('Erro ao finalizar conexão...', err)
        return 
    }
    console.log('Conexão encerrada...')
})