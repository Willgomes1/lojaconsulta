const con = require("../config/conexao.js");
module.exports = app => {


    app.get('/consulta', (req, res) =>
      
      res.send('Get consulta')
    )
  
    app.post('/consulta', (req, res) => {
      console.log(req.body);
      res.send('Post consulta')
    })
  
  }