import React, { useContext } from "react";
import { State } from "../state/State";
import { PostJobForm } from "../components";

import {
  PostedTable,
  AppiedTable,
  ProfileInfo,
  ProfilePicture,
} from "../components";

const UserProfile: React.FC = () => {
  const { JOBS_POST_FORM_STATE, PROFILE_STATE } = useContext(State);

  return (
    <div className={"page"} id={"profile-page"}>
      <div id="profile-info-container">
        <ProfilePicture />
        <ProfileInfo />
      </div>
      <div id="positions-container">
        <h2>Jobs posted</h2>
        <div id="positions-applyed">
          <PostedTable Jobs={PROFILE_STATE.PostedJobs} />
        </div>
        <h2>Jobs applied to</h2>
        <div id="positions-posted">
          <AppiedTable Jobs={PROFILE_STATE.AppliedJobs} />
        </div>
      </div>
      {JOBS_POST_FORM_STATE.visible && <PostJobForm />}
    </div>
  );
};

export default UserProfile;
