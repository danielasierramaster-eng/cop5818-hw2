// scripts/seed_from_datajs.mjs
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Survey from '../models/surveyModel.js';

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/hw2db';

async function loadDataModule() {
  const tries = ['../data.js', '../data/data.js'];
  for (const p of tries) {
    try {
      const mod = await import(new URL(p, import.meta.url));
      if (mod.DATA) return mod.DATA;
    } catch (e) {}
  }
  throw new Error('Could not find data.js exporting const DATA (place it in project root or ./data/)');
}

const DATA = await loadDataModule();

async function run() {
  await mongoose.connect(MONGO_URI);
  console.log('Connected:', MONGO_URI);

  await Survey.deleteMany({});
  await Survey.insertMany(DATA.map(d => ({
    year: Number(d.year ?? d.Year ?? d.yearStart ?? null),
    state: d.state || d.State || null,
    indicator: d.indicator || d.Indicator || d.measure || null,
    group: d.group || d.Group || d.category || null,
    value: d.value != null ? Number(d.value) : null
  })));

  const count = await Survey.countDocuments();
  console.log('Inserted documents:', count);
  await mongoose.disconnect();
  console.log('Done.');
}

run().catch(e => { console.error(e); process.exit(1); });
