const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: Number, required: true },
  jobType: { 
    type: String, 
    enum: ['Full-time (On-site)', 'Part-time (On-site)', 'Full-time (Remote)', 'Part-time (Remote)'],
    required: true 
  },
  description: { type: String, required: true },
  qualifications: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('Job', JobSchema);