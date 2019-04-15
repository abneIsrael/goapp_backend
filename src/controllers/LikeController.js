/**
 * Imports
 */
const Tweet = require('../models/Tweet');

module.exports = {
    async store(req, res) {
        const tweet = await Tweet.findById(req.params.id); //recupera um objeto do registro do banco pela id

        tweet.set({ likes: tweet.likes + 1 }); //altera o atributo id

        await tweet.save(); //salva as alteracoes no banco

        req.io.emit('like', tweet); //emite um evento com o tweet para todos os usuarios conectados a aplicacao

        return res.json(tweet); //retorna os dados atualizados para o front
    },
}