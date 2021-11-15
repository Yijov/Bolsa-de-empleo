import React, { useContext } from "react";
import { State } from "../state/State";
import {
  CategoryList,
  AuthForm,
  PostJobForm,
  JobDetailsPannel,
} from "../components";

const Home: React.FC = () => {
  const {
    AUTH_FORM_STATE,
    JOBS_POST_FORM_STATE,
    JOBS_STATE,
    DISPLAY_PANNEL_STATE,
  } = useContext(State);

  const { AuthFormState } = AUTH_FORM_STATE;

  return (
    <div id="home-page" className={"page"}>
      <div id="positions-list-container">
        {JOBS_STATE.map((categorie) => (
          <CategoryList
            _id={categorie._id}
            collection={categorie.collection}
            key={categorie._id}
          />
        ))}
      </div>

      {DISPLAY_PANNEL_STATE.visibility && <JobDetailsPannel />}
      {AuthFormState.visibility && <AuthForm />}
      {JOBS_POST_FORM_STATE.visible && <PostJobForm />}
    </div>
  );
};

export default Home;
