import { IJobPost } from ".";

export default interface IProfile {
  _id: string;
  accessLevel: string; // andmin, poster, user
  name: string;
  lastName: string;
  email: string;
  password: string;
  profesion: string;
  location: string;
  phone: string;
  lastExperience: string;
  skills: string[];
  studies: string;
  PostedJobs: IJobPost[];
  AppliedJobs: IJobPost[];
}
