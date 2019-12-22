const request = require('supertest');
const app = require('../app');

describe('GET /msg', function() {
    it('responds with json', function(done) {
      request(app)
        .get('/api/msg')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});