import { string } from "joi";
import { Schema, model, Model } from "mongoose";

import { IJob } from "../interfaces";

const JobSchema: Schema = new Schema<IJob>(
  {
    ownerId: String, // id of the user who posted
    company: String,
    type: String,
    logo: String,
    URL: String,
    position: String,
    location: String,
    status: {
      type: String,
      default: "active",
    },
    category: String,
    description: String,
    email: String,
    howToApply: String,
    applicants: [String],
  },
  { timestamps: true }
);

const UserModel: Model<IJob> = model("Job", JobSchema);
export default UserModel;
