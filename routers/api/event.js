const express = require('express');

const router = express.Router();

const ctrl = require('../../controllers/event');

router.get('/allEvents', ctrl.allEvents);
router.get('/event', ctrl.event);
router.post('/addEvent', ctrl.addEvent);

module.exports = router;
