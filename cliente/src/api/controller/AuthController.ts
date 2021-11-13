import IAuthData from "../../interfaces/IAurhData";
import AuthService from "../service/AuthService";
class AuthController {
  public signIn = async (authData: IAuthData) => {
    const response = await AuthService.signIn(authData);
    return response;
  };
  public signUp = async (authData: IAuthData) => {
    const response = await AuthService.signUp(authData);
    return response;
  };
  public signOut = async () => {
    const response = await AuthService.signOut();
    return response;
  };
}

export default new AuthController();
