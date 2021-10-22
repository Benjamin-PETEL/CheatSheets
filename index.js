const express = require('express');

// Init app
const app = express();

// Templating
app.set('views', './views');
app.set('view engine', 'pug');

// TEMP
const articles = [
    {
        'title': '1',
        'content': 'detail article 1'
    },
    {
        'title': '2',
        'content': 'detail article 2'
    },
    {
        'title': '3',
        'content': 'detail article 3'
    },
]

// Routing
app.get('/', (req, res) => {
    res.render('index');
});
articles.forEach(article => {
    app.get('/'+article.title, (req, res) => {
        res.render('article', article);
    })
});

app.listen(3000, () => {
    console.log('express running on port 3000');
});
