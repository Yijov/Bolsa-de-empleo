import React, { useState, useContext } from "react";

import { useHistory } from "react-router";
import { MdAccountCircle } from "react-icons/md";
import { BsMegaphoneFill, BsPersonCircle } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";

import { State } from "../../state/State";
const AccountMenu: React.FC = () => {
  const history = useHistory();

  const { AUTH_API, JOBS_POST_FORM_API, AUTH_STATE, AUTH_FORM_API } =
    useContext(State);

  const { Auth } = AUTH_STATE;

  const initialState = "dropdown-content";

  const [classList, setClassList] = useState(initialState);
  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
  const TogleDropDown = () => {
    if (classList.includes("show")) {
      setClassList(initialState);
    } else {
      setClassList(initialState + " show");
    }
  };

  const togglePostForm = () => {
    JOBS_POST_FORM_API.toggleForm();
    TogleDropDown();
  };

  const toggleSingInForm = () => {
    AUTH_FORM_API.toggleFormVisibility();
    TogleDropDown();
  };

  const signout = () => {
    AUTH_API.SignOut();
    TogleDropDown();
  };
  const goToProfile = (event: React.MouseEvent) => {
    event.preventDefault();
    history.push("/profile");
    TogleDropDown();
  };

  return (
    <div className="dropdown">
      <MdAccountCircle onClick={TogleDropDown} className="dropbtn" />
      <div id="myDropdown" className={classList}>
        {Auth && (
          <button onClick={goToProfile}>
            <BsPersonCircle /> My Profile
          </button>
        )}
        {Auth && (
          <button onClick={togglePostForm}>
            <BsMegaphoneFill /> Post a Job
          </button>
        )}
        {Auth && (
          <button onClick={signout}>
            <IoLogOut /> Sign Out
          </button>
        )}

        {!Auth && (
          <button onClick={toggleSingInForm}>
            <BsPersonCircle /> Sign in
          </button>
        )}
      </div>
    </div>
  );
};

export default AccountMenu;
