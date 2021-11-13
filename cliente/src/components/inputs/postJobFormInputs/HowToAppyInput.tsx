import React, { useContext } from "react";
import { State } from "../../../state/State";

const HowToAppyInput: React.FC = () => {
  const { JOBS_POST_FORM_API, JOBS_POST_FORM_STATE } = useContext(State);
  return (
    <input
      type="text"
      name="howToApply"
      id="howToApply_input"
      placeholder="How To Apply"
      autoComplete="off"
      onChange={JOBS_POST_FORM_API.hendleInput}
      value={JOBS_POST_FORM_STATE.Job.howToApply}
    />
  );
};
export default HowToAppyInput;
