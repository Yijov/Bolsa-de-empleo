import { IJobPost } from "../../interfaces";
import JobService from "../service/JobService";
class JobController {
  public getJobs = async () => {
    const response = await JobService.getJobs();
    return response;
  };
  public postJob = async (Job: IJobPost) => {
    const response = await JobService.postJob(Job);
    return response;
  };
  public updateJob = async (Job: IJobPost) => {
    const response = await JobService.updateJob(Job);
    return response;
  };
  public deleteJob = async (Job: IJobPost) => {
    const response = await JobService.deleteJob(Job);
    return response;
  };
}

export default new JobController();
