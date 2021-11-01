import { Router, NextFunction, Request, Response } from "express";
import JobService from "../services/JobService";

class JobsController {
  private router: Router = Router();
  constructor() {
    this.router.get("/", this.getJobs, JobService.getJobs);
    this.router.post("/", this.postJob, JobService.postJobs);
    this.router.put("/;id", this.updateJob, JobService.updateJob);
    this.router.delete("/:id", this.deleteJob, JobService.deleteJob);
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
  async deleteJob(req: Request, res: Response, next: NextFunction) {
    next();
  }
}

export default new JobsController();
