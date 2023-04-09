const express = require('express');
const beverageController = require('../controllers/beverageController');

const router = express.Router();

router.post('/', beverageController.createBeverage);
router.get('/', beverageController.getBeverages);
router.get('/:id', beverageController.getBeverageById);
router.put('/:id', beverageController.updateBeverageById);
router.delete('/:id', beverageController.deleteBeverageById);

module.exports = router;
