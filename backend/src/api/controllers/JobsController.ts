import { Router, NextFunction, Request, Response } from "express";
import JobService from "../services/JobService";
import { AuthValidator } from "../validations";

class JobsController {
  private router: Router = Router();
  constructor() {
    this.router.get("/", this.getJobs, JobService.getJobs);
    this.router.post(
      "/",
      AuthValidator.isAuth,
      this.postJob,
      JobService.postJobs
    );
    this.router.put(
      "/:id",
      AuthValidator.isAuth,
      this.updateJob,
      JobService.updateJob
    );

    this.router.put(
      "/apply/:id",
      AuthValidator.isAuth,
      this.updateJob,
      JobService.applyToJob
    );

    this.router.delete(
      "/:id",
      AuthValidator.isAuth,
      this.deleteJob,
      JobService.deleteJob
    );
  }
  public get Router() {
    return this.router;
  }

  async getJobs(req: Request, res: Response, next: NextFunction) {
    next();
  }
  async postJob(req: Request, res: Response, next: NextFunction) {
    next();
  }
  async updateJob(req: Request, res: Response, next: NextFunction) {
    next();
  }
  async applyJob(req: Request, res: Response, next: NextFunction) {
    next();
  }
  async deleteJob(req: Request, res: Response, next: NextFunction) {
    next();
  }
}

export default new JobsController();
