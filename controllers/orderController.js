const Order = require('../models/Order');
const Beverage = require('../models/Beverage');

const orderController = {};

orderController.createOrder = async (req, res) => {
  const { customerName, beverages, pickupTime, paymentMethod } = req.body;
  let total = 0;
  for (let i = 0; i < beverages.length; i++) {
    const beverage = await Beverage.findById(beverages[i].beverage);
    if (!beverage) {
      return res.status(404).json({
        error: `Bebida con id ${beverages[i].beverage} no encontrada`,
      });
    }
    total += beverage.price * beverages[i].quantity;
  }
  const order = new Order({
    customerName,
    beverages,
    pickupTime,
    paymentMethod,
    total,
  });
  await order.save();
  res.status(201).json(order);
};

orderController.getOrders = async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
};

orderController.getOrderById = async (req, res) => {
  const { id } = req.params;
  const order = await Order.findById(id).populate('beverages.beverage');
  if (!order) {
    return res.status(404).json({ error: 'Orden no encontrada' });
  }
  res.json(order);
};

orderController.updateOrderById = async (req, res) => {
  const { id } = req.params;
  const { customerName, beverages, pickupTime, paymentMethod } = req.body;
  let total = 0;
  for (let i = 0; i < beverages.length; i++) {
    const beverage = await Beverage.findById(beverages[i].beverage);
    if (!beverage) {
      return res.status(404).json({
        error: `Bebida con id ${beverages[i].beverage} no encontrada`,
      });
    }
    total += beverage.price * beverages[i].quantity;
  }
  const order = await Order.findByIdAndUpdate(
    id,
    { customerName, beverages, pickupTime, paymentMethod, total },
    { new: true }
  ).populate('beverages.beverage');
  if (!order) {
    return res.status(404).json({ error: 'Orden no encontrada' });
  }
  res.json(order);
};

orderController.deleteOrderById = async (req, res) => {
  const { id } = req.params;
  const order = await Order.findByIdAndDelete(id);
  if (!order) {
    return res.status(404).json({ error: 'Orden no encontrada' });
  }
  res.json(order);
};

module.exports = orderController;
