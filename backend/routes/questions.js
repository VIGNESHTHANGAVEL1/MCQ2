const express = require('express');
const router = express.Router();
const { getQuestionsByTopic } = require('../controllers/questionsController');

router.get('/:topic', getQuestionsByTopic);

module.exports = router;
