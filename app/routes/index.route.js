const express = require('express');
const indexController = require('../controllers/index.controller');
const storeController = require('../controllers/store.controller');
const itemController = require('../controllers/item.controller');
const router = express.Router();

router.get('/', indexController.welcome);

router.get('/stores', storeController.findAll);
router.get('/story/:id', storeController.findOne);

router.get('/items', itemController.findAll);
router.get('/item/:id', itemController.findOne);

module.exports = router;