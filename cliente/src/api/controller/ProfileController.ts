import { IProfile, IJobPost } from "../../interfaces";
import ProfileService from "../service/ProfileService";
class ProfileController {
  public getProfile = async () => {
    const response = await ProfileService.getProfile();
    return response;
  };
  public updateProfile = async (newProfile: IProfile) => {
    const response = await ProfileService.updateProfile(newProfile);
    return response;
  };
  public applyToPosition = async (position: IJobPost) => {
    const response = await ProfileService.applyToPosition(position);
    return response;
  };
}

export default new ProfileController();
