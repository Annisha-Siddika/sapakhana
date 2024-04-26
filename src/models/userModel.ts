import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email "],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide an email "],
  },
  isVerified: {
    type: Boolean,
    required: false,
  },
});
