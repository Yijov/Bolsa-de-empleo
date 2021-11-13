import React, { useContext } from "react";
import { State } from "../../../state/State";
import categories from "../../../config/constants/Categories";
const CategoryInput: React.FC = () => {
  const { JOBS_POST_FORM_API, JOBS_POST_FORM_STATE } = useContext(State);
  const getcategoryes = (): string[] => {
    let categ: string[] = [];
    for (let item in categories) {
      if (isNaN(Number(item))) {
        categ.push(item);
      }
    }
    return categ;
  };

  return (
    <>
      <select
        name="category"
        id="category-input"
        onChange={JOBS_POST_FORM_API.hendleInput}
        value={JOBS_POST_FORM_STATE.Job.category}
        placeholder={"Category"}
        required
      >
        {getcategoryes().map((category) => (
          <option key={category} value={category}>
            {category.toLocaleUpperCase()}
          </option>
        ))}
      </select>
    </>
  );
};

export default CategoryInput;
