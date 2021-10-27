export default interface IUser {
  _id: string;
  accessLevel: string; // andmin, poster, user
  name: string;
  lastName: string;
  email: string;
  password: string;
}
