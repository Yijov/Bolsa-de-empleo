import React, { useContext } from "react";
import { State } from "../../../state/State";

const URLInput: React.FC = () => {
  const { JOBS_POST_FORM_API, JOBS_POST_FORM_STATE } = useContext(State);
  return (
    <input
      type="text"
      name="URL"
      id="company-URL"
      placeholder="URL for more information"
      autoComplete="off"
      onChange={JOBS_POST_FORM_API.hendleInput}
      value={JOBS_POST_FORM_STATE.Job.URL}
    />
  );
};
export default URLInput;
