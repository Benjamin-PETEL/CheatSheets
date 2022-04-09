const {router, articleMountPoint, articles} = require('./articles');

const request = require('supertest');
const express = require('express');
const { Test } = require('supertest');

describe('Test articles endpoints', () => {
    const app = express();

    beforeAll(() => {
        app.set('view engine', 'ejs');
        app.use(articleMountPoint, router);
    });

    articles.forEach(article => {
        test('git endpoint', (done) => {
            request(app)
                .get(articleMountPoint + '/' + article.title)
                .expect(200)
                .end((err, res) => {
                    if(err) return done(err);
                    expect(res.text).toContain('id="navbar"');
                    expect(res.text).toContain('id="navSummary"');
                    expect(res.text).toContain('id="summaryButton"');
                    expect(res.text).toContain('id="footer"');
                    done();
                });
        });
    })
});