const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {title: 'Página index', message:'Bem-vindo a página Index'})
})
app.get('/pagina1', (req, res) => {
    res.render('index', {title: 'Página 1', message:'Bem-vindo a página 1'})
})
app.get('/pagina2', (req, res) => {
    res.render('index', {title: 'Página 2', message:'Bem-vindo a página 2'})
})

const port = 3000

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})