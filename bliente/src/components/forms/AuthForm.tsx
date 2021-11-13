import React, { useContext } from "react";
import { State } from "../../state/State";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import {
  Email,
  Password,
  Name,
  ConfirmPassword,
  LastName,
  Submit,
} from "../inputs";

const AuthForm: React.FC = () => {
  const { AUTH_API, AUTH_STATE, AUTH_FORM_STATE, AUTH_FORM_API } =
    useContext(State);
  const { AuthError } = AUTH_STATE;
  const { handleSigUpnSubmit, handleSignInSubmit } = AUTH_API;
  const { AuthFormState } = AUTH_FORM_STATE;

  const HandleSubmit = (Event: React.FormEvent<HTMLFormElement>) => {
    Event.preventDefault();
    if (AuthFormState.singUpMode) {
      handleSigUpnSubmit(Event);
    } else {
      handleSignInSubmit(Event);
    }
  };
  return (
    <form id="auth-form" onSubmit={HandleSubmit}>
      <IoCloseSharp
        id="auth-form-close_button"
        onClick={AUTH_FORM_API.toggleFormVisibility}
      />
      {AuthFormState.singUpMode ? <h2> Sign UP</h2> : <h2> Sign in</h2>}
      {AuthFormState.singUpMode && <Name />}
      {AuthFormState.singUpMode && <LastName />}
      <Email />
      <Password />
      {AuthFormState.singUpMode && <ConfirmPassword />}
      <div id="auth-error">
        <span>{AuthError}</span>
      </div>
      <Submit />
      {!AuthFormState.singUpMode && (
        <Link id="reset-pasword_link" to="/">
          Forgot my password
        </Link>
      )}
      {AuthFormState.singUpMode && (
        <Link
          id="reset-pasword_link"
          to="/"
          onClick={AUTH_FORM_API.toggleFormMode}
        >
          Have an account? Sign In here
        </Link>
      )}
      {!AuthFormState.singUpMode && (
        <Link
          id="create-account_link"
          to="/"
          onClick={AUTH_FORM_API.toggleFormMode}
        >
          Create an account
        </Link>
      )}
    </form>
  );
};

export default AuthForm;
