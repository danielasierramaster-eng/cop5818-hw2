// routes/api.js
import { Router } from 'express';
import {
  createEntry, getAllEntries, getEntryById, updateEntry, deleteEntry,
  q1_count, q2_years, q3_groups, q4_stateCount,
  q5_statesMostEntries, q6_stateSingleMax, q7_stateAvgMax, q8_nationalVsStates
} from '../controllers/dataController.js';

const router = Router();

router.post('/data', createEntry);
router.get('/data', getAllEntries);
router.get('/data/:id', getEntryById);
router.put('/data/:id', updateEntry);
router.delete('/data/:id', deleteEntry);

router.get('/questions/q1-count', q1_count);
router.get('/questions/q2-years', q2_years);
router.get('/questions/q3-groups', q3_groups);
router.get('/questions/q4-state-count', q4_stateCount);
router.get('/questions/q5-states-most-entries', q5_statesMostEntries);
router.get('/questions/q6-state-single-max', q6_stateSingleMax);
router.get('/questions/q7-state-avg-max', q7_stateAvgMax);
router.get('/questions/q8-national-vs-states', q8_nationalVsStates);

export default router;
