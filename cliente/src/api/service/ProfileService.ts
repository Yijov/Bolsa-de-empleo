import Api from "../data/api/Api";
import { IProfile, IJobPost } from "../../interfaces";
class ProfileService {
  public getProfile = async () => {
    const response = await Api.getProfile();
    return response;
  };
  public updateProfile = async (newProfile: IProfile) => {
    const response = await Api.updateProfile(newProfile);
    return response;
  };

  public applyToPosition = async (position: IJobPost) => {
    const response = await Api.applyToPosition(position);
    return response;
  };
}

export default new ProfileService();
