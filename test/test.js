var request = require('supertest');
var app = require('../index');

describe('node-app', () => {
    after(() => {
        require('./../index').stop();
    })

    describe('GET /', function() {
        it('respond with Piedistrict Private Limited is a Start-up Technology Development Centre for projects in Middle East, Europe and United States.', (done) => {
            //navigate to root and check the response is "hello world"
            request(app).get('/').expect('Piedistrict Private Limited is a Start-up Technology Development Centre for projects in Middle East, Europe and United States.').end(done);
        });
    });
})
