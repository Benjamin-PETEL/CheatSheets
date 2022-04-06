require('dotenv').config();

const app = require('./server.js');
   
app.listen(3000, () => {
    console.log('express running on port 3000');
});
