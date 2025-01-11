import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.models.User ?? mongoose.model("User", userSchema);

export default User;
