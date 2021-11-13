import { User } from "../../models";
import Api from "../data/api/Api";
import IAuthData from "../../interfaces/IAurhData";
class AuthService {
  public signIn = async (authData: IAuthData) => {
    const { email, password } = authData;
    const response = await Api.signIn(email, password);
    return response;
  };
  public signUp = async (authData: IAuthData) => {
    const { name, lastName, password, email } = authData;
    const user = new User(name, lastName, password, email);
    const response = await Api.signUp(user);
    return response;
  };
  public signOut = async () => {
    const response = await Api.signOut();
    return response;
  };
}

export default new AuthService();
