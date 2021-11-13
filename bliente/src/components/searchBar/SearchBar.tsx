import React from "react";
import ButtonComponent from "../buttons/CustomButton";
import { FaSearch } from "react-icons/fa";

const SearchBar: React.FC = () => {
  return (
    <div id="buttons-searchbar-container">
      <form action="">
        <input
          type="search"
          name="search-bar"
          id="search-bar"
          placeholder={"Search..."}
        />
        <ButtonComponent icon={<FaSearch />} classname={"search-submit"} />
      </form>
    </div>
  );
};

export default SearchBar;
