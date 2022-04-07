const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const marked = require('marked');

// TEMP
const articles = [
    {
        'title': 'Git',
        'location': '/git.md'
    },
    {
        'title': 'PHP',
        'location': '/php.md'
    },
    {
        'title': 'Node',
        'location': '/node.md'
    },
    {
        'title': 'about',
        'location': '/about.md'
    }
];

articles.forEach(article => {
    router.get('/'+article.title, (req, res) => {
        const stream = fs.createReadStream(path.join(__dirname, article.location), 'utf8');
        stream.on('error', (error) => {
            console.log(error);
            res.redirect('/');
        });
        stream.on('data', (data) => {
            article.content = marked.parse(data, {'headerIds':false });
            res.render('article', {'article': article, 'articles': articles});
        });
    })
});

module.exports = {router, articles};