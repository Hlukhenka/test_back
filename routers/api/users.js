const express = require('express');

const router = express.Router();

const validateBody = require('../../middlewares/validateBody');
const { registerUserSchema } = require('../../models/user');

const ctrl = require('../../controllers/user');

router.post(
  '/event/registerUser',
  validateBody(registerUserSchema),
  ctrl.registerUser,
);

module.exports = router;
