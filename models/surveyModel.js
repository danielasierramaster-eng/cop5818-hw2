// models/surveyModel.js
import mongoose from 'mongoose';

const SurveySchema = new mongoose.Schema({
  year: { type: Number, index: true },
  state: { type: String, index: true },
  indicator: { type: String, index: true },
  group: { type: String, index: true },
  value: { type: Number }
}, { timestamps: true });

export default mongoose.model('Survey', SurveySchema);
