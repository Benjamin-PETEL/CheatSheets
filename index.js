const express = require('express');

// Init app
const app = express();

// Templating
app.set('views', './views');
app.set('view engine', 'pug');

// Routing
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('express running on port 3000');
});
