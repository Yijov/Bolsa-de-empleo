import { useState, useEffect } from "react";
import { IClasifyedJobs, IJobPost } from "../interfaces";

const useFilter = (JobsLists: IClasifyedJobs[], filteCondition: string) => {
  const [filteredJobs, setFilteredJobs] = useState<IJobPost[]>([]);

  const filter = async () => {
    let collections: IJobPost[] = [];
    await JobsLists?.forEach(
      (List) => (collections = [...List.collection, ...collections])
    );

    setFilteredJobs(collections);
  };

  useEffect(() => {
    if (JobsLists.length > 0) filter();
    // eslint-disable-next-line
  }, [JobsLists]);

  return filteredJobs;
};

export default useFilter;
