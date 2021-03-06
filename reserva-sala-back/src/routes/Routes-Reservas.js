'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controlers/Controller-Reservas');

router.get('/', controller.get);
router.get('/:nome', controller.getbyName);
router.get('/admin/:id', controller.getbyId);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;
