import React, { useState, useEffect } from "react";
import AuthController from "../../../api/controller/AuthController";
import Cookies from "universal-cookie";
import AuthFormState from "./AuthFormState";
const cookies = new Cookies();

const Database = AuthController;

export default function AuthState() {
  // autho state
  const [Auth, setAuth] = useState(true);

  const [AuthError, setAuthError] = useState("");

  //user data state
  const [AuthData, setAuthData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  //auth Form

  const { AUTH_FORM_API, AUTH_FORM_STATE } = AuthFormState();

  //vaidate if user is loged in
  const vaiidatelogin = async () => {
    const LogToken = await cookies.get("LogToken");
    if (!LogToken) {
      setAuth(false);
    } else {
      setAuth(true);
    }
  };

  //log out function
  const SignOut = async (Event: React.MouseEvent<HTMLButtonElement>) => {
    if (window.confirm("¿Are you sure that you are loging out?")) {
      const response = await Database.signOut();

      if (response?.success) setAuth(false);
      if (response?.error) setAuth(false);
    }
  };

  //log in submision function

  const handleSignInSubmit = async (
    Event: React.FormEvent<HTMLFormElement>
  ) => {
    Event.preventDefault();
    const response = await Database.signIn(AuthData);
    if (response?.success) {
      AUTH_FORM_API.toggleFormVisibility();
      return setAuth(true);
    } else {
      setAuthError(response?.error);
      return setAuth(false);
    }
  };

  //register submision function

  const handleSigUpnSubmit = async (
    Event: React.FormEvent<HTMLFormElement>
  ) => {
    Event.preventDefault();
    if (AuthData.password !== AuthData.passwordConfirm) {
      setAuthError("The pasword does not match the pasword confirmed");
      setAuth(false);
    }
    const response = await Database.signUp(AuthData);
    if (response.success) {
      AUTH_FORM_API.toggleFormVisibility();
      setAuth(true);
    } else {
      setAuthError(response.error);
      setAuth(false);
      setAuthError(response.error);
    }
  };
  // to handle input of log in and register

  const hendleAuthInput = (Event: React.ChangeEvent<HTMLInputElement>) => {
    Event.preventDefault();
    setAuthError("");
    let { name, value } = Event.target;
    setAuthData({ ...AuthData, [name]: value });
  };

  //validate log in on load
  useEffect(() => {
    vaiidatelogin(); // eslint-disable-next-line
  }, []);

  //abstracting before exporting
  //the API contains all the methods to modify the state and the STATE contains all relavant pieces of stata

  const AUTH_API = {
    SignOut,
    hendleAuthInput,
    handleSignInSubmit,
    handleSigUpnSubmit,
  };

  const AUTH_STATE = {
    Auth,
    AuthData,
    AuthError,
  };
  //Exporting all the information
  return { AUTH_API, AUTH_STATE, AUTH_FORM_API, AUTH_FORM_STATE };
}
