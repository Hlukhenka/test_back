const { ctrlWrapper } = require('../helpers');
const Event = require('../models/event');

const allEvents = async (req, res) => {
  const events = await Event.find();

  res.status(200).json({ events });
};

const event = async (req, res) => {
  const {_id} = req.body;

  const result = await Event.findById(_id);

  res.status(200).json(result);
};

const addEvent = async (req, res) => {
  const { title, description, users } = req.body;

  const result = await Event.create({ title, description, users });

  res.json(result);
};
module.exports = {
  allEvents: ctrlWrapper(allEvents),
  event: ctrlWrapper(event),
  addEvent: ctrlWrapper(addEvent),
};
