const express = require('express')
const router = express.Router()

router.get('/register', (req, res) => {
    res.render('authors/admin')
})

router.post('/register', (req, res) => {
    const username = req.body.username 
    const password = req.body.password
    if (username === "test" && password === "psd") {
        //res.redirect('adminPanel')
        res.send(`
            <link id="main-css" rel="stylesheet" href="/stylesheets/main.css">
            <header>
                <nav class="header-nav">
                    <a class="header-title" href="/">HANG Books</a>
                    <ul>
                        <li><a href="/authors">Authors</a></li>
                        <li><a href="/authors/new">Add Author</a></li>
                        <li><a href="/books">Books</a></li>
                        <li><a href="/books/new">Add Book</a></li>
                    </ul>
                </nav>
            </header>
        `)
    }
    else res.status(201).send('Invalid username or password')
})

module.exports = router
