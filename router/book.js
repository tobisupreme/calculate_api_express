const Router = require('express').Router;

const booksRouter = Router()

booksRouter.get('/', (req, res) => {
    return res.json({ books: [{ id: 1, name: 'Book 1'}]})
})

booksRouter.get('/others', (req, res) => {
    return res.json({ books: [{ id: 2, name: 'Book 3'}]})
})

module.exports = booksRouter;
