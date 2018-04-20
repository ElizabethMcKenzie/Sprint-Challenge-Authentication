const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 11;

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  }
});

UserSchema.pre('save', function(next) {
  console.log('inside save');
  bcrypt.hash(this.password, SALT_ROUNDS, (err, hash) => {
    if (err) {
      return next(err);
    }
    this.password = hash;
    return next();
  });
});

UserSchema.methods.checkPassword = function(plainTextPW, callBack) {
  bcrypt.compare(plainTextPW, this.password, (err, validated) => {
    if (err) {
      return callBack(err);
    }
    callBack(null, validated);
  });
};

module.exports = mongoose.model('User', UserSchema);
