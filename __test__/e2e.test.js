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

describe('GET /todo', function() {
  it('should responds with json', function() {
    const result = {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
  };
    return request(app)
      .get('/api/todo/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body.data).toMatchObject(result);
      });
  });

});