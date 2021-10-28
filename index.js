const express = require('express');
const path = require('path');

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
        'content': 'Mon titre git',
        'location': '../article/git.md'
    },
    {
        'title': 'Node',
        'content': 'Mon article sur node'
    },
    {
        'title': 'Shell',
        'content': 'Mon article shell linux'
    },
]

// ROUTING
// Home route
app.get('/', (req, res) => {
    // res.render('index', {'articles': articles});
    res.render('index');
});
// Articles route
articles.forEach(article => {
    app.get('/'+article.title, (req, res) => {
        // res.render('article', {'articles': articles, 'article': article});
        res.render('article', {'article': article});
    })
});
// 404 route
app.use((req, res) => {
    // res.status(400).render('404', {'articles': articles});
    res.status(400).render('404');
});
   
app.listen(3000, () => {
    console.log('express running on port 3000');
});
