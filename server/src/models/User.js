const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, unique: true, required: true },
});

const User = model('User', UserSchema, 'User');

module.exports = User;
