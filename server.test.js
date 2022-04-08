const request = require('supertest');
const server = require('./server.js');

describe('Test serve endpoints', () => {
    test('/', (done) => {
        request(server)
            .get('/')
            .expect('Content-Type', /html/)
            .expect(200)
            .end((err, res) => {
                if (err){
                    return done(err);
                }
                expect(res.text).toContain('id="navbar"');
                expect(res.text).toContain('id="footer"');
                done();
            });
    });

    test('404 redirect', (done) =>{
        request(server)
            .get('/wrong-page')
            .expect(400)
            .expect('Content-Type', /html/)
            .end((err, res) => {
                if(err){
                    return done(err);
                }
                console.log(res);
                expect(res.text).toContain('id="navbar"');
                expect(res.text).toContain('id="footer"');
                done();
            });
    });
});