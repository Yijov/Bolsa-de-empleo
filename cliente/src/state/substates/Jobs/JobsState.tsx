import { useState, useEffect } from "react";
import { IClasifyedJobs } from "../../../interfaces";
import JobPostFormState from "./JobPostFormState";
import JobsController from "../../../api/controller/JobsController";
import JobDetailsPannel from "./JobDetailsPannel";

const JobsState = () => {
  const [Jobs, setJobs] = useState<IClasifyedJobs[]>([]);

  const getJobs = async () => {
    let result = await JobsController.getJobs();
    if (result.success) {
      setJobs(result.jobs);
    }
  };

  //sub states

  const { JOBS_POST_FORM_API, JOBS_POST_FORM_STATE } =
    JobPostFormState(getJobs);

  const { DISPLAY_PANNEL_STATE, DISPLAY_PANNEL_API } = JobDetailsPannel();

  //call jobslisf from the database on load
  useEffect(() => {
    getJobs();
  }, []);

  return {
    JOBS_STATE: Jobs,
    JOBS_API: { getJobs },
    JOBS_POST_FORM_API,
    JOBS_POST_FORM_STATE,
    DISPLAY_PANNEL_STATE,
    DISPLAY_PANNEL_API,
  };
};

export default JobsState;
