//models the  data to be imputed in order to sign
import { IProfile, IClasifyedJobs, IJobPost } from ".";

export default interface IAPIResponse {
  success: boolean;
  error: string;
  jobs: IClasifyedJobs[];
  job: IJobPost;
  message: string;
  profile: IProfile;
  PostedJobs: IJobPost[];
  AppliedJobs: IJobPost[];
}
