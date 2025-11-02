# HW2 
This project implements a RESTful backend API using Node.js, Express, and MongoDB for COP 5818 Homework 2.
It loads my Homework 1 dataset—containing fields for year, state, indicator, group, and value—into a MongoDB database and provides full CRUD operations to manage the data.
In addition, the API includes eight analytical endpoints that answer the same research questions from Homework 1 by performing real-time MongoDB queries.
The project demonstrates skills in data modeling with Mongoose, API design with Express, unit testing with Jest and Supertest, and proper version control practices using Git and GitHub.

This matches HW1 fields (`year, state, indicator, group, value`) and answers the **same 8 questions** via GET endpoints.

## Quick Start
```bash
npm install
cp .env.example .env        
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

### Link to GitHub Repository https://github.com/danielasierramaster-eng/cop5818-hw2
