require('dotenv').config;

const express = require('express');
const marked = require('marked');
const path = require('path');
const fs = require('fs');
const exec = require('child_process').exec;
const repo = "/var/www/CheatSheets";
const crypto = require('crypto');

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
        'title': 'PHP',
        'location': '/articles/php.md'
    },
    {
        'title': 'Node',
        'location': '/articles/node.md'
    },
    {
        'title': 'about',
        'location': '/articles/about.md'
    }
];

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
            article.content = marked.parse(data, {'headerIds':false });
            res.render('article', {'article': article, 'articles': articles});
        });
    })
});
// Webhook CD route
app.post('/webhook', (req, res) => {
    console.info("webhook");
    req.on('data', chunk => {
        let signature = "sha256=" + crypto.createHmac('sha256', process.env.WEBHOOK_SECRET)
                                        .update(chunk.toString())
                                        .digest('hex');
    
        if(req.headers['X-Hub-Signature-256'] === signature){
            console.info("webhook signature checked, now pulling");
            exec('echo webhook Cheatsheets');
            exec('cd ' + repo + ' && git pull');
            res.status(200).end();
            console.info("npm install");
            exec('npm install');
            console.info("Restarting app");
            exec('pm2 restart index.js');
        } else {
            console.error("could not verify webhook secret");
            res.status(500).end();
        }
    });
});
// 404 route
app.use((req, res) => {
    res.status(400).render('404', {'articles': articles});
});
   
app.listen(3000, () => {
    console.log('express running on port 3000');
});
