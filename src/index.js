/**
 * Import Dempendencias
 */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express(); //instancia da aplicacao

// configura o server para o real time
const server = require('http').Server(app);
const io = require('socket.io')(server); // io guardara os dados dos usuarios conectados a aplicacao


mongoose.connect("mongodb://abn_webbox:ASZXq1w2@ds037067.mlab.com:37067/goweek-webbox", {
    useNewUrlParser: true
}); //estabelece conexao com MongoBD

//Cria um Midleware (interceptador de requisicoes)
app.use((req, res, next) => {
    req.io = io;

    return next();//Envia a requisicao para sua rota destinada, assim, impede que o midlewere blockeie a requisicao
});

app.use(cors()); //habilita que a nossa aplicacao receba requisicoes de clientes externos ao servidor da nossa aplicacao
app.use(express.json()); //Imforma ao express que nossa Aplicacao vai usar JSON para todas as Requisicoes
app.use(require("./routes")); //Importa o arquivo de Rotas da nossa Aplicacao


server.listen(3000, () => {
    console.log(' IAE :D Server started on port 3000');
});