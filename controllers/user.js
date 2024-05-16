const { ctrlWrapper, HttpError } = require('../helpers');
const Event = require('../models/event');
const { User } = require('../models/user');

const registerUser = async (req, res) => {
  const { name, email, birth, aboutEvent, _id } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, 'Email alredy in use');
  }

  const result = await User.create({ name, email, birth, aboutEvent });

  const event = await Event.findById(_id);
  event.users.push(user);
  await event.save();

  res.status(201).json(result);
};

module.exports = {
  registerUser: ctrlWrapper(registerUser),
};
