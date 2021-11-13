import React, { useContext } from "react";

import { State } from "../../../state/State";

const ConfirmPasswordInput: React.FC = () => {
  const { AUTH_API, AUTH_STATE } = useContext(State);
  const { AuthData } = AUTH_STATE;
  const { hendleAuthInput } = AUTH_API;
  return (
    <input
      type="password"
      name="passwordConfirm"
      id="auth-password-confirm"
      placeholder="Confim your password"
      autoComplete="off"
      onChange={hendleAuthInput}
      value={AuthData.passwordConfirm}
      required
    />
  );
};

export default ConfirmPasswordInput;
