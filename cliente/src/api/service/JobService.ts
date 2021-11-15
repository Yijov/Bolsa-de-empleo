import { IJobPost } from "../../interfaces";
import Api from "../data/api/Api";
class JobService {
  public getJobs = async () => {
    const response = await Api.getJobs();
    return response;
  };
  public postJob = async (Job: IJobPost) => {
    const response = await Api.postJob(Job);
    return response;
  };
  public updateJob = async (Job: IJobPost) => {
    const response = await Api.updateJob(Job);
    return response;
  };
  public deactivateJobPost = async (Job: IJobPost) => {
    const response = await Api.deactivateJobPost(Job);
    return response;
  };
  public deleteJob = async (Job: IJobPost) => {
    const response = await Api.deleteJob(Job);
    return response;
  };
}

export default new JobService();
