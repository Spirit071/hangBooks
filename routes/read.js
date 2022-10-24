const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')

const Book = require('../models/book')

router.get('/:id', async (req, res) =>
{
    const book = await Book.findById(req.params.id)
    res.render('read', {book: book})
})

module.exports = router
