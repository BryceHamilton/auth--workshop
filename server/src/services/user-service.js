const { User } = require('../models');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
  const { username, email, password } = userBody;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Please enter all fields' });
  }

  const user = await User.findOne({ email });
  if (user) throw Error('User already exists');

  const salt = await bcrypt.genSalt(10);
  if (!salt) throw Error('Something went wrong with bcrypt');

  const hash = await bcrypt.hash(password, salt);
  if (!hash) throw Error('Something went wrong hashing the password');

  const newUser = new User({
    username,
    email,
    password: hash,
  });

  const savedUser = await newUser.save();
  if (!savedUser) throw Error('Something went wrong saving the user');

  return savedUser;
};

module.exports = { createUser };
