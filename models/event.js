const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const eventSchema = new Schema(
  {
    title: {
      type: String,
    },

    description: {
      type: String,
    },

    users: {
      type: Array,
    },
  },
  { versionKey: false, timestamps: false },
);

eventSchema.post('save', handleMongooseError);

const Event = model('event', eventSchema);

module.exports = Event;
