const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');
const Joi = require('joi');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    birth: {
      type: String,
      required: true,
    },
    aboutEvent: {
      type: String,
      required: true,
    },
    events: {
      type: Schema.Types.ObjectId,
      ref: 'event',
    },
  },
  { versionKey: false, timestamps: false },
);

const registerUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  birth: Joi.date().required(),
  aboutEvent: Joi.string(),
  _id: Joi.string().required(),
});

userSchema.post('save', handleMongooseError);

const User = model('user', userSchema);

module.exports = { User, registerUserSchema };
