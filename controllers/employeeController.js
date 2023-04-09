const Employee = require('../models/Employee');

const employeeController = {};

employeeController.createEmployee = async (req, res) => {
  const { name, qrCode, location, activities, schedule } = req.body;
  const employee = new Employee({
    name,
    qrCode,
    location,
    activities,
    schedule,
  });
  await employee.save();
  res.status(201).json(employee);
};

employeeController.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

employeeController.getEmployeeById = async (req, res) => {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }
    res.json(employee);
  };
  
  employeeController.updateEmployeeById = async (req, res) => {
    const { id } = req.params;
    const { name, qrCode, location, activities, schedule } = req.body;
    const employee = await Employee.findByIdAndUpdate(
      id,
      { name, qrCode, location, activities, schedule },
      { new: true }
    );
    if (!employee) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }
    res.json(employee);
  };
  
  employeeController.deleteEmployeeById = async (req, res) => {
    const { id } = req.params;
    const employee = await Employee.findByIdAndDelete(id);
    if (!employee) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }
    res.json(employee);
  };
  
  module.exports = employeeController;
  
