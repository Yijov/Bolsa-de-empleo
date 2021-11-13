import { useState } from "react";

export default function AuthFormState() {
  const [AuthFormState, setAuthFormState] = useState({
    singUpMode: false,
    visibility: false,
  });

  const toggleFormVisibility = () => {
    setAuthFormState({
      ...AuthFormState,
      visibility: !AuthFormState.visibility,
    });
  };

  const toggleFormMode = () => {
    setAuthFormState({
      ...AuthFormState,
      singUpMode: !AuthFormState.singUpMode,
    });
  };

  const AUTH_FORM_API = { toggleFormMode, toggleFormVisibility };
  const AUTH_FORM_STATE = { AuthFormState };

  return { AUTH_FORM_API, AUTH_FORM_STATE };
}
