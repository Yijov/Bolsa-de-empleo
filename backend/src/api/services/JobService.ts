const dotenv = require("dotenv");
dotenv.config();
import { NextFunction, Request, Response } from "express";
import { JobModel, UserModel } from "../models";
import { IClasifyedJobs, IJob } from "../interfaces";
import mongooseJobObjecStructure from "../../config/constants/mongooseJobAggregateStructure";
import alfabethicSort from "../../helpers/AlphebeticSortFunction";

class JobService {
  constructor() {}

  public async getJobs(req: Request, res: Response, next: NextFunction) {
    let jobs = await JobModel.aggregate([
      { $match: { status: true } },
      {
        $group: {
          _id: "$category",

          collection: {
            $push: mongooseJobObjecStructure,
          },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      message: "",
      error: "",
      jobs: jobs.sort((a, b) => alfabethicSort(a, b, "_id")), //sort them the name of the category
    });
  }

  public async postJobs(req: Request, res: Response, next: NextFunction) {
    try {
      let jobBody: {} = {
        ...req.body,
        ownerId: req.body.validatedUser.id,
      };
      let newJob = await new JobModel(jobBody);
      let addedJob = await newJob.save();
      res.status(200).json({
        success: true,
        message: "Job Created",
        error: "",
        job: addedJob,
      });
    } catch (error) {
      next(error);
    }
  }

  public async updateJob(req: Request, res: Response, next: NextFunction) {
    let id = { _id: req.params.id };
    let change = { $set: req.body };
    let options = { upsert: true, new: true };
    try {
      let result = await JobModel.findOneAndUpdate(id, change, options).exec();
      res
        .status(200)
        .json({ success: true, Message: "job Updated", job: result });
    } catch (err) {
      next(err);
    }
  }

  public async applyToJob(req: Request, res: Response, next: NextFunction) {
    let options = { upsert: true, new: true };
    try {
      //add job to the list of jobs applied to in the  user profile
      let userId = { _id: req.body.validatedUser.id };
      let userProfilechange = { $push: { AppliedJobs: req.body } };
      let updateduserProfile = await UserModel.findOneAndUpdate(
        userId,
        userProfilechange,
        options
      ).exec();

      //add user profile to the list og users that applyed to the  job in the job document
      let JobChange = { $push: { applicants: updateduserProfile?.id } };
      let jobId = { _id: req.params.id };
      await JobModel.findOneAndUpdate(jobId, JobChange, options).exec();

      //get the list of posted jobs:
      const PostedJobs = await JobModel.find({
        ownerId: req.body.validatedUser.id,
      });

      //sent succesfull response to theuser
      res.status(200).json({
        success: true,
        error: "",
        message: "Your application has been submited",
        profile: updateduserProfile,
        PostedJobs,
      });
    } catch (err) {
      next(err);
    }
  }

  public async deleteJob(req: Request, res: Response, next: NextFunction) {
    try {
      let job = await JobModel.findByIdAndDelete(req.params.id);
      if (job) {
        res.status(200).json({ Message: "Vacante borrada exitosamente" });
      } else res.status(404).json({ Message: "Vacante no existe" });
    } catch (error) {
      next(error);
    }
  }
}

export default new JobService();
