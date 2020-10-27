const chai = require('chai');
const request = require('supertest');
const app = require('../app');
const assert = chai.assert;

describe('GET /data/list/1', () => {
  let server;

  before(() => {
    server = app.listen(3000);
  });

  it('should get the sample list', () => {
    return request(server)
      .get('/data/list/1')
      .expect(200)
      .expect((res) => {
        assert(res.body.id, 1);
      });
  });

  after(() => server.close());
});


describe('POST /data/list', () => {
  let server;

  before(() => {
    server = app.listen(3000);
  });

  it('should add the given list', () => {
    return request(server)
      .post('/data/list').send({
        id: 2,
        items: [
          {
            id: 1,
            name: "Lucy"
          }
        ]
    })
      .expect(200)
      .expect((res) => {
        assert(res.text, true);
      });
  });

  after(() => server.close());
});

describe('PUT /data/list', () => {
  let server;

  before(() => {
    server = app.listen(3000);
  });

  it('should modify the given list', () => {
    return request(server)
      .put('/data/list').send({
        id: 1,
        items: [
          {
            id: 1,
            name: "Edison"
          }
        ]
    })
      .expect(200)
      .expect((res) => {
        assert(res.text, true);
      });
  });

  after(() => server.close());
});

describe('DELETE /data/list/2', () => {
  let server;

  before(() => {
    server = app.listen(3000);
  });

  it('should delete the given list', () => {
    return request(server)
      .delete('/data/list/2')
      .expect(200)
      .expect((res) => {
        assert(res.text, true);
      });
  });

  after(() => server.close());
});


///
describe('GET /data/list/1/item/1', () => {
  let server;

  before(() => {
    server = app.listen(3000);
  });

  it('should get the sample item', () => {
    return request(server)
      .get('/data/list/1/item/1')
      .expect(200)
      .expect((res) => {
        assert(res.body.id, 1);
      });
  });

  after(() => server.close());
});


describe('POST /data/list/1/item', () => {
  let server;

  before(() => {
    server = app.listen(3000);
  });

  it('should add the given item', () => {
    return request(server)
      .post('/data/list/1/item').send({
        id: 2,
        name: "Lucy"
    })
      .expect(200)
      .expect((res) => {
        assert(res.text, true);
      });
  });

  after(() => server.close());
});

describe('PUT /data/list/1/item', () => {
  let server;

  before(() => {
    server = app.listen(3000);
  });

  it('should modify the given item', () => {
    return request(server)
      .put('/data/list/1/item').send({
        id: 1,
        name: "Edison"
    })
      .expect(200)
      .expect((res) => {
        assert(res.text, true);
      });
  });

  after(() => server.close());
});

describe('DELETE /data/list/1/item/1', () => {
  let server;

  before(() => {
    server = app.listen(3000);
  });

  it('should delete the given item', () => {
    return request(server)
      .delete('/data/list/1/item/1')
      .expect(200)
      .expect((res) => {
        assert(res.text, true);
      });
  });

  after(() => server.close());
});
