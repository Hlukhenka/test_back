const { ctrlWrapper, HttpError } = require('../helpers');
const Event = require('../models/event');
const { User } = require('../models/user');

const registerUser = async (req, res) => {
  const { name, email, birth, aboutEvent, _id } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, 'Email alredy in use');
  }

  const newUser = {
    name,
    email,
    birth,
    aboutEvent,
  };

  await User.create(newUser);

  const event = await Event.findById(_id);
  event.users.push(user);
  await event.save();

  res.status(201).json(newUser);
};

module.exports = {
  registerUser: ctrlWrapper(registerUser),
};
