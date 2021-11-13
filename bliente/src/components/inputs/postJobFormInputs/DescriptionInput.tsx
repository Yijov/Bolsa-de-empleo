import React, { useContext } from "react";
import { State } from "../../../state/State";

const DescriptionInput: React.FC = () => {
  const { JOBS_POST_FORM_API, JOBS_POST_FORM_STATE } = useContext(State);
  return (
    <input
      type="text"
      name="description"
      id="position-description"
      placeholder="Description"
      autoComplete="off"
      onChange={JOBS_POST_FORM_API.hendleInput}
      value={JOBS_POST_FORM_STATE.Job.description}
    />
  );
};

export default DescriptionInput;
