import React, { useContext } from "react";
import { State } from "../../state/State";
import { SearchBar, Logo } from "../";
import AccountMenu from "../dropdown/AccountMenu";

const Navigation: React.FC = () => {
  const { PROFILE_STATE, PROFILE_API, AUTH_STATE } = useContext(State);
  return (
    <nav>
      <div id="acction-bar">
        <Logo />
        <SearchBar />

        {AUTH_STATE.Auth && (
          <h3 style={{ color: "white" }}>
            {PROFILE_STATE.name + " " + PROFILE_STATE.lastName}
          </h3>
        )}
        <AccountMenu />
      </div>
    </nav>
  );
};

export default Navigation;
