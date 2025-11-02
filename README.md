# HW2 (Aligned to Your HW1 dataset & questions)

This matches your HW1 fields (`year, state, indicator, group, value`) and answers the **same 8 questions** via GET endpoints.

## Quick Start
```bash
npm install
cp .env.example .env        # edit MONGO_URI if needed
# copy your HW1 data.js (export const DATA = [...]) into project root (or ./data/data.js)
npm run seed                # loads DATA into MongoDB
npm run dev                 # start server
```

Base URL: `http://localhost:3000/api/v1`

### CRUD
- POST `/data`  | create
- GET  `/data`  | list (filter with ?state=&year=&indicator=&group=)
- GET  `/data/:id`
- PUT  `/data/:id`
- DELETE `/data/:id`

### Questions (1–8)
- GET `/questions/q1-count`
- GET `/questions/q2-years`
- GET `/questions/q3-groups`
- GET `/questions/q4-state-count`
- GET `/questions/q5-states-most-entries`
- GET `/questions/q6-state-single-max`
- GET `/questions/q7-state-avg-max`
- GET `/questions/q8-national-vs-states`
