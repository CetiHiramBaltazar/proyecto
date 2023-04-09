const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  qrCode: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    enum: ['caja', 'barra'],
    required: true,
  },
  activities: [
    {
      type: String,
    },
  ],
  schedule: [
    {
      dayOfWeek: String,
      startTime: String,
      endTime: String,
    },
  ],
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;

