import { IJob } from ".";
export default interface IUser {
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
  AppliedJobs: IJob[];
}
