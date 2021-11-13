import { IClasifyedJobs } from ".";

export default interface IState {
  AUTH_API: any;
  AUTH_STATE: any;
  AUTH_FORM_API: any;
  AUTH_FORM_STATE: any;
  JOBS_POST_FORM_API: any;
  JOBS_POST_FORM_STATE: any;
  PROFILE_API: any;
  PROFILE_STATE: any;
  JOBS_API: any;
  JOBS_STATE: IClasifyedJobs[];
}
