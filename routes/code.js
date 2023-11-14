'use strict';

const express = require('express');
const router = express.Router();

const codeController = require('../controllers/codeController');

router.delete('/:code', codeController.processCode);
router.get('/:code', codeController.processCode);
router.patch('/:code', codeController.processCode);
router.post('/:code', codeController.processCode);
router.put('/:code', codeController.processCode);

module.exports = router;