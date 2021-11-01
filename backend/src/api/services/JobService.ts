const dotenv = require("dotenv");
dotenv.config();
import { NextFunction, Request, Response } from "express";
import { JobModel } from "../models";
class JobService {
  constructor() {}

  public async getJobs(req: Request, res: Response, next: NextFunction) {
    try {
      let jobs = await JobModel.find();
      res.status(200).json({ jobs });
    } catch (error) {
      next(error);
    }
  }

  public async postJobs(req: Request, res: Response, next: NextFunction) {
    try {
      let jobBody: {} = {
        ...req.body,
        user: req.body.validatedUser.id,
      };
      let newJob = await new JobModel(jobBody);
      let addedJob = await newJob.save();
      res
        .status(200)
        .json({
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
      res.status(200).json({ Message: "job Updated", job: result });
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
