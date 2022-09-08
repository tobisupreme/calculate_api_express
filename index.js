const express = require('express');
const calculatorRouter = require('./router/calculate');
const booksRouter = require('./router/book');

const PORT = 3000;

const app = express();

app.use(express.json())

app.use('/calculate', calculatorRouter);
app.use('/books', booksRouter)

app.use('*', (req, res) => {
    return res.json({ message: 'route not found' })
})


app.listen(PORT, () => {
    console.log(`app listening on port: ${PORT}`)
})

