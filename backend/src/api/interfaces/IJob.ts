export default interface IJob {
  _id: string;
  ownerId: string; // user id
  company: string;
  type: string;
  logo: string;
  URL: string;
  status: boolean;
  position: string;
  location: string;
  category: string;
  description: string;
  email: string;
  howToApply: string;
  applicants: [string];
}
