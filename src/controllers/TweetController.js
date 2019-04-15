/**
 * Imports
 */
const Tweet = require('../models/Tweet');

/**
 * Metodos do Controller
 */
module.exports = {
    async index(req, res) {
        const tweets = await Tweet.find({}).sort("-createdAt");

        return res.json(tweets);
    },

    async store(req, res) {
        const tweet = await Tweet.create(req.body);

        req.io.emit('tweet', tweet); //emite um evento com o tweet para todos os usuarios conectados a sua aplicacao

        return res.json(tweet);
    }
}