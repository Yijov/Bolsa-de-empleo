import { Schema, model, Model } from "mongoose";

import { IUser } from "../interfaces";

const UserSchema: Schema = new Schema<IUser>(
  {
    accessLevel: { type: String, required: true, default: "user" },
    name: {
      type: String,
      required: true,
      max: 50,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      min: 50,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
      min: 50,
    },
  },
  { timestamps: true }
);

const UserModel: Model<IUser> = model("user", UserSchema);
export default UserModel;
