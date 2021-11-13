import React, { useContext } from "react";
import { State } from "../../state/State";
import { AiFillPicture } from "react-icons/ai";
import MicroFormFieldNoLabel from "../microFormField/MicroFormFieldNoLabel";
const ProfilePicture: React.FC = () => {
  const { PROFILE_STATE, PROFILE_API } = useContext(State);
  return (
    <div id="profile-picture">
      <AiFillPicture className="icon" />
      <h2 id="profile-name">
        <MicroFormFieldNoLabel
          fieldName={"name"}
          information={PROFILE_STATE.name}
          submitAcction={PROFILE_API.updateProfile}
          inputHandler={PROFILE_API.hendleInput}
        />{" "}
        <MicroFormFieldNoLabel
          fieldName={"lastName"}
          information={PROFILE_STATE.lastName}
          submitAcction={PROFILE_API.updateProfile}
          inputHandler={PROFILE_API.hendleInput}
        />
        <span id="profile-profesion">
          <MicroFormFieldNoLabel
            fieldName={"profesion"}
            information={PROFILE_STATE.profesion}
            submitAcction={PROFILE_API.updateProfile}
            inputHandler={PROFILE_API.hendleInput}
          />
        </span>
      </h2>
    </div>
  );
};

export default ProfilePicture;
