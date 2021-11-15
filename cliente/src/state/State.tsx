import React, { createContext, useEffect } from "react";
import AuthState from "./substates/Auth/AuthState";
import ProfileState from "./substates/Profile/ProfileState";
import { GeneralInitialState, TState } from "./stateconfig/generalStateConfig";
import JobsState from "./substates/Jobs/JobsState";

export const State = createContext<TState>(GeneralInitialState);

export function StateProvider(props: any) {
  const { AUTH_API, AUTH_STATE, AUTH_FORM_API, AUTH_FORM_STATE } = AuthState();
  const { PROFILE_API, PROFILE_STATE } = ProfileState();
  const {
    JOBS_API,
    JOBS_STATE,
    JOBS_POST_FORM_API,
    JOBS_POST_FORM_STATE,
    DISPLAY_PANNEL_STATE,
    DISPLAY_PANNEL_API,
  } = JobsState();

  useEffect(() => {
    if (AUTH_STATE.Auth) {
      PROFILE_API.getProfile();
    }
    // eslint-disable-next-line
  }, [AUTH_STATE.Auth]);

  return (
    <State.Provider
      value={{
        AUTH_API,
        AUTH_STATE,
        AUTH_FORM_API,
        AUTH_FORM_STATE,
        JOBS_POST_FORM_API,
        JOBS_POST_FORM_STATE,
        PROFILE_API,
        PROFILE_STATE,
        JOBS_API,
        JOBS_STATE,
        DISPLAY_PANNEL_STATE,
        DISPLAY_PANNEL_API,
      }}
    >
      {props.children}
    </State.Provider>
  );
}
