const request = require('supertest');
const app = require('../src/app');

describe('GET /health', () => {
  it('returns status ok', async () => {
    const response = await request(app).get('/health');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });
});

describe('GET /api/hello', () => {
  it('returns default greeting', async () => {
    const response = await request(app).get('/api/hello');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Hello, World!' });
  });

  it('returns personalized greeting when name is provided', async () => {
    const response = await request(app).get('/api/hello?name=Nauman');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Hello, Nauman!' });
  });
});
