import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,

  },
  address: {
    type: String,
    required: true
  },
}, {
  timestamps: true // Automatically add createdAt and updatedAt properties
})

export const User = mongoose.model("Users", userSchema);