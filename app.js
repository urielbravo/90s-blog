const express = require('express')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')

// Init App
const app = express()

app.use(expressLayouts)

// load View Engine
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Perro'
    })
})

app.get('/posts/add', (req, res)=> {
    res.render('addPost', {
        title: 'Add Post'
    })
})

app.listen(3000, () => {
    console.log('Server started on port 3000')
})
