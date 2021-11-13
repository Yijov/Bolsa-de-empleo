import React, { useContext } from "react";
import { State } from "../../state/State";
import MicroFormField from "../microFormField/MicroFormField";

const ProfileInfo: React.FC = () => {
  const { PROFILE_STATE, PROFILE_API } = useContext(State);

  return (
    <div id="profile-info">
      <MicroFormField
        fieldLabel={"Studies at"}
        fieldName={"studies"}
        information={PROFILE_STATE.studies}
        submitAcction={PROFILE_API.updateProfile}
        inputHandler={PROFILE_API.hendleInput}
      />

      <MicroFormField
        fieldLabel={"phone Number"}
        fieldName={"phone"}
        information={PROFILE_STATE.phone}
        submitAcction={PROFILE_API.updateProfile}
        inputHandler={PROFILE_API.hendleInput}
      />

      <MicroFormField
        fieldLabel={"E-mail"}
        fieldName={"email"}
        information={PROFILE_STATE.email}
        submitAcction={PROFILE_API.updateProfile}
        inputHandler={PROFILE_API.hendleInput}
      />
      <MicroFormField
        fieldLabel={"location"}
        fieldName={"location"}
        information={PROFILE_STATE.location}
        submitAcction={PROFILE_API.updateProfile}
        inputHandler={PROFILE_API.hendleInput}
      />
      <MicroFormField
        fieldLabel={"Last Experience"}
        fieldName={"lastExperience"}
        information={PROFILE_STATE.lastExperience}
        submitAcction={PROFILE_API.updateProfile}
        inputHandler={PROFILE_API.hendleInput}
      />
      <MicroFormField
        fieldLabel={"skills"}
        fieldName={"skills"}
        information={PROFILE_STATE.skills}
        submitAcction={PROFILE_API.updateProfile}
        inputHandler={PROFILE_API.hendleInput}
      />
    </div>
  );
};

export default ProfileInfo;
