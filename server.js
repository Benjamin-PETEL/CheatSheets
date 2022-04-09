const express = require('express');
const path = require('path');

// Init app
const app = express();

// Templating
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Style
app.use(express.static(path.join(__dirname, 'public')));

// ROUTING
const articles = require('./articles/articles.js').articles;
// Home route
app.get('/', (req, res) => {
    res.render('index', {articles: articles});
});
// Articles route
const articlesRouter = require('./articles/articles').router;
const articleMountPoint = require('./articles/articles').articleMountPoint;
app.use(articleMountPoint, articlesRouter);

// Webhook CD route
const webhookRouter = require('./webhook/webhook');
app.use('/webhook', webhookRouter);
// 404 route
app.use((req, res) => {
    res.status(400).render('404', {'articles': articles});
});

module.exports = app;