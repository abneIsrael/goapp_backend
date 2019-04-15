/**
 * Imports
 */
const express = require('express');

const routes = express.Router(); //Modulo de Rotas do Express

const TweetController = require('./controllers/TweetController');

const LikeController = require('./controllers/LikeController');

/* Defina suas Rotas aqui */

// routes.get('/', (req, res) => {
//     return res.send("Obrigado Papai! De novo!");
// });

routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);
routes.post('/likes/:id', LikeController.store);

module.exports = routes;