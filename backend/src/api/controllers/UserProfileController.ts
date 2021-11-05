import { Router, NextFunction, Request, Response } from "express";
import UserProfileServie from "../services/userProfileServie";

class UserProfileController {
  private router: Router = Router();
  constructor() {
    this.router.get("/", this.getProfile, UserProfileServie.getProfile);

    this.router.put("/", this.updateProfile, UserProfileServie.updateProfile);
  }
  public get Router() {
    return this.router;
  }

  async getProfile(req: Request, res: Response, next: NextFunction) {
    next();
  }

  async updateProfile(req: Request, res: Response, next: NextFunction) {
    next();
  }
}

export default new UserProfileController();
