import { useState } from "react";
import ProfileController from "../../../api/controller/ProfileController";
import { IProfile, IJobPost } from "../../../interfaces";
import { toast } from "react-toastify";
import { defaultStates } from "../../stateconfig/generalStateConfig";

const ProfileState = () => {
  const [profile, setProfile] = useState<IProfile>(
    defaultStates.ProfileDefault
  );

  const getProfile = async () => {
    try {
      const response = await ProfileController.getProfile();
      if (response.success) {
        setProfile({
          ...response.profile,
          PostedJobs: response.PostedJobs,
        });
      } else {
        toast.error(response.error);
      }
    } catch (error: any) {
      toast.error("Unable to connect to Database");
    }
  };

  const updateProfile = async (Event: React.FormEvent<HTMLFormElement>) => {
    Event.preventDefault();
    const response = await ProfileController.updateProfile(profile);
    if (response.success) {
      toast.success(response.message);
      setProfile(response.profile);
    } else {
      toast.error(response.error);
    }
  };

  const AppyToPossition = async (job: IJobPost) => {
    const response = await ProfileController.applyToPosition(job);
    if (response.success) {
      toast.success(response.message);
      setProfile(response.profile);
    } else {
      toast.error(response.error);
    }
  };

  const hendleInput = (Event: React.ChangeEvent<HTMLInputElement>) => {
    Event.preventDefault();
    let { name, value } = Event.target;
    setProfile({ ...profile, [name]: value });
  };

  return {
    PROFILE_STATE: profile,
    PROFILE_API: { updateProfile, getProfile, hendleInput, AppyToPossition },
  };
};

export default ProfileState;
