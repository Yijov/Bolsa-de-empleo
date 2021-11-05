const dotenv = require("dotenv");
dotenv.config();
import { NextFunction, Request, Response } from "express";
import { UserModel } from "../models";
class UserProfileServie {
  constructor() {}

  public async getProfile(req: Request, res: Response, next: NextFunction) {
    try {
      let result = await UserModel.find({ _id: req.body.validatedUser.id });
      res.status(200).json({
        success: true,
        error: "",
        message: "",
        profile: result[0],
      });
    } catch (error) {
      next(error);
    }
  }

  public async updateProfile(req: Request, res: Response, next: NextFunction) {
    let id = { _id: req.body.validatedUser.id };
    let change = { $set: req.body };
    let options = { upsert: true, new: true };
    try {
      let result = await UserModel.findOneAndUpdate(id, change, options).exec();
      res.status(200).json({
        success: true,
        error: "",
        message: "user Updated",
        profile: result,
      });
    } catch (err) {
      next(err);
    }
  }
}

export default new UserProfileServie();
