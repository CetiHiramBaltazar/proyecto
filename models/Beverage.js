const mongoose = require('mongoose');

const beverageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      name: String,
      amount: Number,
      unit: String,
    },
  ],
  price: {
    type: Number,
    required: true,
  },
});

const Beverage = mongoose.model('Beverage', beverageSchema);

module.exports = Beverage;
