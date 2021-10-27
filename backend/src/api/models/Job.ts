import { Schema, model, Model } from "mongoose";

import { IJob } from "../interfaces";

const JobSchema: Schema = new Schema<IJob>(
  {
    ownerId: String, // user id
    company: String,
    type: String,
    logo: String,
    URL: String,
    position: String,
    location: String,
    category: String,
    description: String,
    email: String,
    howToApply: String,
  },
  { timestamps: true }
);

const UserModel: Model<IJob> = model("Job", JobSchema);
export default UserModel;