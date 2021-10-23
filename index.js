const express = require('express');
const path = require('path');

// Init app
const app = express();

// Templating
app.set('views', './views');
app.set('view engine', 'pug');

// Style
app.use(express.static(path.join(__dirname, 'public')));

// TEMP
const articles = [
    {
        'title': 'git',
        'content': 'Mon article sur git'
    },
    {
        'title': 'node',
        'content': 'Mon article sur node'
    },
    {
        'title': 'shell',
        'content': 'Mon article shell linux'
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
        res.render('article', {'articles': articles, 'article': article});
    })
});
// 404 route
app.use((req, res) => {
    res.status(400).render('404');
    // res.render('404')
});

app.listen(3000, () => {
    console.log('express running on port 3000');
});
