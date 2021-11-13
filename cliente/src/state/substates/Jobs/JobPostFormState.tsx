import React, { useState } from "react";
import IJob from "../../../interfaces/IJobPost";
import JobsController from "../../../api/controller/JobsController";
import { defaultStates } from "../../stateconfig/generalStateConfig";
import { toast } from "react-toastify";

const JobPostFormState = (updateJobList: () => Promise<void>) => {
  const [visibility, setVisibility] = useState(false);

  const [jobInfo, setJobInfo] = useState<IJob>(
    defaultStates.JobPostFormDefault
  );

  const toggleForm = () => {
    setVisibility(!visibility);
  };

  const hendleInput = (Event: React.ChangeEvent<HTMLInputElement>) => {
    Event.preventDefault();
    let { name, value } = Event.target;
    setJobInfo({ ...jobInfo, [name]: value });
  };

  const hendleSubmit = async (Event: React.FormEvent<HTMLFormElement>) => {
    Event.preventDefault();
    const response = await JobsController.postJob(jobInfo);
    if (response.success) {
      toast.success(response.message);
      toggleForm();
      updateJobList();
    }
    if (!response.success) toast.error(response.error);
  };

  const JOBS_POST_FORM_API = {
    hendleInput,
    toggleForm,
    hendleSubmit,
  };

  const JOBS_POST_FORM_STATE = {
    visible: visibility,
    Job: jobInfo,
  };

  return { JOBS_POST_FORM_API, JOBS_POST_FORM_STATE };
};

export default JobPostFormState;
