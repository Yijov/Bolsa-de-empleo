import React, { useContext } from "react";

import { State } from "../../../state/State";
const NameInput: React.FC = () => {
  const { AUTH_API, AUTH_STATE } = useContext(State);
  const { AuthData } = AUTH_STATE;
  const { hendleAuthInput } = AUTH_API;
  return (
    <input
      type="text"
      name="name"
      id="register-name"
      placeholder="Name"
      autoComplete="off"
      onChange={hendleAuthInput}
      value={AuthData.name}
      required
    />
  );
};
export default NameInput;
