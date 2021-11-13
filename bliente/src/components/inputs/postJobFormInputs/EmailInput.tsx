import React, { useContext } from "react";
import { State } from "../../../state/State";

const EmailInput: React.FC = () => {
  const { JOBS_POST_FORM_API, JOBS_POST_FORM_STATE } = useContext(State);

  return (
    <input
      type="email"
      name="email"
      id="company-email"
      placeholder="E-mail"
      autoComplete="off"
      onChange={JOBS_POST_FORM_API.hendleInput}
      value={JOBS_POST_FORM_STATE.Job.email}
    />
  );
};

export default EmailInput;
