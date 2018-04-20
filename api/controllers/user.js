const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  console.log('creating');
  const { username, password } = req.body;
  console.log({ username, password });
  const user = new User({ username, password });
  user
    .save()
    .then(newUser => res.status(200).json(newUser))
    .catch(err => res.status(500).json(err));
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
};

module.exports = {
  createUser
};
