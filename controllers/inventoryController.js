const Inventory = require('../models/Inventory');

const inventoryController = {};

inventoryController.createInventory = async (req, res) => {
  const { name, quantity, location, barcode } = req.body;
  const inventory = new Inventory({
    name,
    quantity,
    location,
    barcode,
  });
  await inventory.save();
  res.status(201).json(inventory);
};

inventoryController.getInventories = async (req, res) => {
  const inventories = await Inventory.find();
  res.json(inventories);
};

inventoryController.getInventoryById = async (req, res) => {
  const { id } = req.params;
  const inventory = await Inventory.findById(id);
  if (!inventory) {
    return res.status(404).json({ error: 'Inventario no encontrado' });
  }
  res.json(inventory);
};

inventoryController.updateInventoryById = async (req, res) => {
  const { id } = req.params;
  const { name, quantity, location, barcode } = req.body;
  const inventory = await Inventory.findByIdAndUpdate(
    id,
    { name, quantity, location, barcode },
    { new: true }
  );
  if (!inventory) {
    return res.status(404).json({ error: 'Inventario no encontrado' });
  }
  res.json(inventory);
};

inventoryController.deleteInventoryById = async (req, res) => {
  const { id } = req.params;
  const inventory = await Inventory.findByIdAndDelete(id);
  if (!inventory) {
    return res.status(404).json({ error: 'Inventario no encontrado' });
  }
  res.json(inventory);
};

module.exports = inventoryController;
