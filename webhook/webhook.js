const express = require('express');
const router = express.Router();

const exec = require('child_process').exec;
const repo = process.env.REPO;
const crypto = require('crypto');

router.post('/webhook', (req, res) => {
    console.info("webhook");
    req.on('data', chunk => {
        let sha256 = crypto.createHmac('sha256', process.env.WEBHOOK_SECRET)
                           .update(chunk.toString())
                           .digest('hex');
        let signature = "sha256=" + sha256;
    
        if(req.headers['x-hub-signature-256'] === signature){
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

module.exports = router;

