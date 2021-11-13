import React, { useContext } from "react";
import { State } from "../../../state/State";

const CompanyInput: React.FC = () => {
  const { JOBS_POST_FORM_API, JOBS_POST_FORM_STATE } = useContext(State);
  return (
    <input
      type="text"
      name="company"
      id="company-name"
      placeholder="Company name"
      autoComplete="off"
      onChange={JOBS_POST_FORM_API.hendleInput}
      value={JOBS_POST_FORM_STATE.Job.company}
    />
  );
};
export default CompanyInput;
