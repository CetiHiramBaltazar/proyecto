const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  beverages: [
    {
      beverage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Beverage',
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  pickupTime: {
    type: Date,
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ['PayPal'],
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
