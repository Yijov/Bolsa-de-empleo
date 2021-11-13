import React, { useContext } from "react";

import { State } from "../../../state/State";

const EmailInput: React.FC = () => {
  const { AUTH_API, AUTH_STATE } = useContext(State);
  const { AuthData } = AUTH_STATE;
  const { hendleAuthInput } = AUTH_API;
  return (
    <input
      type="email"
      name="email"
      id="auth-email"
      placeholder="E-mail"
      autoComplete="off"
      onChange={hendleAuthInput}
      value={AuthData.email}
      required
    />
  );
};

export default EmailInput;
