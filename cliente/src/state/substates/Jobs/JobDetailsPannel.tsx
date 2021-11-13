import { useState } from "react";
import IJob from "../../../interfaces/IJobPost";
import { defaultStates } from "../../stateconfig/generalStateConfig";

interface stateModel {
  JobToDisplay: IJob;
  visibility: boolean;
}

const JobDetailsPannel = () => {
  const [formState, SetFormState] = useState<stateModel>(
    defaultStates.DisplayFormDefault
  );
  const openFrom = (job: IJob) => {
    SetFormState({ visibility: true, JobToDisplay: job });
  };
  const closeForm = () => {
    SetFormState(defaultStates.DisplayFormDefault);
  };
  return {
    DISPLAY_PANNEL_STATE: formState,
    DISPLAY_PANNEL_API: { openFrom, closeForm },
  };
};

export default JobDetailsPannel;
