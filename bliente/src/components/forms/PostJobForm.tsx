import React, { useContext } from "react";
import { State } from "../../state/State";
import { IoCloseSharp } from "react-icons/io5";
import {
  Category,
  Company,
  Description,
  HowToApply,
  Location,
  Position,
  Submit,
  CompanyEmail,
  Type,
  URL,
} from "../inputs";

const PostJobForm: React.FC = () => {
  const { JOBS_POST_FORM_API } = useContext(State);
  return (
    <form id={"post-job_form"} onSubmit={JOBS_POST_FORM_API.hendleSubmit}>
      <IoCloseSharp
        id="post-form-close_button"
        onClick={JOBS_POST_FORM_API.toggleForm}
      />
      <h3> Post a new position</h3>
      <Position />
      <Company />
      <Description />
      <Location />
      <Category />
      <Type />
      <HowToApply />
      <CompanyEmail />
      <URL />
      <Submit />
    </form>
  );
};

export default PostJobForm;
