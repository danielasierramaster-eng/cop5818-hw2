/* tests/api.test.js */
import request from 'supertest';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import app from '../../app.js';
import Survey from '../../models/surveyModel.js';

let mongo;
beforeAll(async () => {
  mongo = await MongoMemoryServer.create();
  await mongoose.connect(mongo.getUri());
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongo.stop();
});

beforeEach(async () => {
  await Survey.deleteMany({});
  await Survey.insertMany([
    { year: 2020, state: 'FL', indicator: 'Anxiety', group: 'By State', value: 24.5 },
    { year: 2020, state: 'NY', indicator: 'Anxiety', group: 'By State', value: 28.2 },
    { year: 2020, state: 'United States', indicator: 'Anxiety', group: 'National', value: 26.0 }
  ]);
});

test('CRUD: POST /data creates a row', async () => {
  const res = await request(app).post('/api/v1/data').send(
    { year: 2020, state: 'CA', indicator: 'Anxiety', group: 'By State', value: 22.0 }
  );
  expect(res.status).toBe(201);
  expect(res.body.state).toBe('CA');
});

test('Q1: count endpoint works', async () => {
  const res = await request(app).get('/api/v1/questions/q1-count');
  expect(res.status).toBe(200);
  expect(typeof res.body.answer).toBe('number');
});

test('Q6: state with single highest value', async () => {
  const res = await request(app).get('/api/v1/questions/q6-state-single-max');
  expect(res.status).toBe(200);
  expect(res.body.answer).toBe('NY'); // 28.2 is highest in seed
});
