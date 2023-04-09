const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    enum: ['bodega', 'barra'],
    required: true,
  },
  barcode: {
    type: String,
    required: true,
    unique: true,
  },
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;
