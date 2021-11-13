//models the  data to be imputed in order to sign IN
export default interface IAuthData {
  name: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}
