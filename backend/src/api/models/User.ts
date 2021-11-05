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
      max: 50,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
      max: 50,
    },
    profesion: {
      type: String,
      trim: true,
      required: false,
      min: 100,
      default: "-",
    },
    lastExperience: {
      type: String,
      trim: true,
      required: false,
      mac: 100,
      default: "-",
    },
    location: {
      type: String,
      trim: true,
      required: false,
      max: 60,
      default: "-",
    },

    phone: {
      type: String,
      trim: true,
      required: false,
      max: 50,
      default: "-",
    },

    skills: {
      type: [String],
      trim: true,
      required: false,
      default: [],
    },
    studies: {
      type: String,
      trim: true,
      required: false,
      default: "-",
    },
  },
  { timestamps: true }
);

const UserModel: Model<IUser> = model("user", UserSchema);
export default UserModel;
