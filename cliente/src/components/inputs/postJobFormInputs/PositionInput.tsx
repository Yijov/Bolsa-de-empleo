import React, { useContext } from "react";
import { State } from "../../../state/State";

const PositionInput: React.FC = () => {
  const { JOBS_POST_FORM_API, JOBS_POST_FORM_STATE } = useContext(State);
  return (
    <input
      type="text"
      name="position"
      id="position-name"
      placeholder="Position name"
      autoComplete="off"
      onChange={JOBS_POST_FORM_API.hendleInput}
      value={JOBS_POST_FORM_STATE.Job.position}
      required
    />
  );
};

export default PositionInput;
