const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, resp) => {
    resp.send("Meu Primeiro EndPoint")
})

app.listen(port, () =>{
    console.log('Aplicação com express porta ' + port);
})