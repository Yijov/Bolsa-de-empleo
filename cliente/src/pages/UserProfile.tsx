import React, { useContext, useEffect } from "react";
import { State } from "../state/State";
import { PostJobForm } from "../components";

import {
  PostedTable,
  AppiedTable,
  ProfileInfo,
  ProfilePicture,
} from "../components";

const UserProfile: React.FC = () => {
  const { JOBS_POST_FORM_STATE, PROFILE_STATE, AUTH_STATE, PROFILE_API } =
    useContext(State);
  useEffect(() => {
    if (AUTH_STATE.Auth) {
      PROFILE_API.getProfile();
    }
    // eslint-disable-next-line
  }, [AUTH_STATE.Auth]);

  return (
    <div className={"page"} id={"profile-page"}>
      <div id="profile-info-container">
        <ProfilePicture />
        <ProfileInfo />
      </div>
      <div id="positions-container">
        <div id="positions-applyed">
          <PostedTable Jobs={PROFILE_STATE.PostedJobs} />
        </div>
        <div id="positions-posted">
          <AppiedTable Jobs={PROFILE_STATE.AppliedJobs} />
        </div>
        {JOBS_POST_FORM_STATE.visible && <PostJobForm />}
      </div>
    </div>
  );
};

export default UserProfile;
