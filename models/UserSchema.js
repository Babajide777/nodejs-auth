const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true, min: 6, max: 255 },
  email: { type: String, require: true, unique: true, min: 6, max: 255 },
  password: { type: String, required: true, min: 6, max: 1024 },
  date: { Date, default: Date.now },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
