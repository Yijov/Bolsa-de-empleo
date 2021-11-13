import React, { useContext } from "react";

import { State } from "../../../state/State";

const LastNameInput: React.FC = () => {
  const { AUTH_API, AUTH_STATE } = useContext(State);
  const { AuthData } = AUTH_STATE;
  const { hendleAuthInput } = AUTH_API;
  return (
    <input
      type="text"
      name="lastName"
      id="register-lastName"
      placeholder="Last Name"
      autoComplete="off"
      onChange={hendleAuthInput}
      value={AuthData.lastName}
      required
    />
  );
};

export default LastNameInput;
