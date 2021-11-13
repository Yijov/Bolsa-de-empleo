import React, { useContext } from "react";

import { State } from "../../../state/State";

const PasswordInput: React.FC = () => {
  const { AUTH_API, AUTH_STATE } = useContext(State);
  const { AuthData } = AUTH_STATE;
  const { hendleAuthInput } = AUTH_API;
  return (
    <input
      type="password"
      name="password"
      id="auth-password"
      placeholder="Password"
      autoComplete="off"
      onChange={hendleAuthInput}
      value={AuthData.password}
      required
    />
  );
};

export default PasswordInput;
