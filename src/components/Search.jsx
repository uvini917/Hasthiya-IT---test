import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DetailsRows from "./DetailsRows";

import "../App.css";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  let handleInputChange = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setSearchInput(lowerCase);
  };

  return (
    <>
      <div className="search-bar">
        <FontAwesomeIcon icon="fa-regular fa-magnifying-glass" />
        <input
          type="text"
          name="search"
          id="search-bar"
          placeholder="Search Name or Email"
          onChange={handleInputChange}
        />
        <i class="fa fa-search" aria-hidden="true"></i>
      </div>
      <DetailsRows input={searchInput} />
    </>
  );
}

export default Search;
