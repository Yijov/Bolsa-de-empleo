import { Router, NextFunction, Request, Response } from "express";

class JobsController {
  private router: Router = Router();
  constructor() {
    this.router.get("/", this.getJobs);
    this.router.post("/:id", this.postJob);
    this.router.put("/;id", this.updateJob);
    this.router.delete("/:id", this.deleteJob);
  }
  public get Router() {
    return this.router;
  }

  async getJobs(req: Request, res: Response, next: NextFunction): Promise<{}> {
    throw new Error("Method not implemented.");
  }
  async postJob(req: Request, res: Response, next: NextFunction): Promise<{}> {
    throw new Error("Method not implemented.");
  }
  async updateJob(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<{}> {
    throw new Error("Method not implemented.");
  }
  async deleteJob(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<{}> {
    throw new Error("Method not implemented.");
  }
}

export default new JobsController();
