import mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

let UserModel;

if (mongoose.models.user) {
  UserModel = mongoose.models.user;
} else {
  UserModel = mongoose.model("user", User);
}

export default UserModel;
