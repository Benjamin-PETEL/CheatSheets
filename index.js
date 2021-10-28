const express = require('express');
const marked = require('marked');
const path = require('path');
const fs = require('fs');

// Init app
const app = express();

// Templating
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Style
app.use(express.static(path.join(__dirname, 'public')));

// TEMP
const articles = [
    {
        'title': 'Git',
        'location': '/articles/git.md'
    },
    {
        'title': 'Node',
        'location': '/articles/node.md'
    },
    {
        'title': 'Shell',
        'location': '/articles/shell.md'
    },
]

// ROUTING
// Home route
app.get('/', (req, res) => {
    res.render('index', {'articles': articles});
});
// Articles route
articles.forEach(article => {
    app.get('/'+article.title, (req, res) => {
        const stream = fs.createReadStream(path.join(__dirname, article.location), 'utf8');
        stream.on('error', (error) => {
            console.log(error);
            res.redirect('/');
        });
        stream.on('data', (data) => {
            article.content = marked(data, {'headerIds':false });
            res.render('article', {'article': article, 'articles': articles});
        });
    })
});
// 404 route
app.use((req, res) => {
    res.status(400).render('404', {'articles': articles});
});
   
app.listen(3000, () => {
    console.log('express running on port 3000');
});
