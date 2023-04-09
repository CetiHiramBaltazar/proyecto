const Beverage = require('../models/Beverage');

const beverageController = {};

beverageController.createBeverage = async (req, res) => {
  const { name, ingredients, price } = req.body;
  const beverage = new Beverage({
    name,
    ingredients,
    price,
  });
  await beverage.save();
  res.status(201).json(beverage);
};

beverageController.getBeverages = async (req, res) => {
  const beverages = await Beverage.find();
  res.json(beverages);
};

beverageController.getBeverageById = async (req, res) => {
  const { id } = req.params;
  const beverage = await Beverage.findById(id);
  if (!beverage) {
    return res.status(404).json({ error: 'Bebida no encontrada' });
  }
  res.json(beverage);
};

beverageController.updateBeverageById = async (req, res) => {
  const { id } = req.params;
  const { name, ingredients, price } = req.body;
  const beverage = await Beverage.findByIdAndUpdate(
    id,
    { name, ingredients, price },
    { new: true }
  );
  if (!beverage) {
    return res.status(404).json({ error: 'Bebida no encontrada' });
  }
  res.json(beverage);
};

beverageController.deleteBeverageById = async (req, res) => {
  const { id } = req.params;
  const beverage = await Beverage.findByIdAndDelete(id);
  if (!beverage) {
    return res.status(404).json({ error: 'Bebida no encontrada' });
  }
  res.json(beverage);
};

module.exports = beverageController;
