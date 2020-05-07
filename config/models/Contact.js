const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "Energy",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  points: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("contact", ContactSchema);
