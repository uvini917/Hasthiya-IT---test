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
        {/* <i className="fas fa-magnifying-glass"></i> */}

        <input
          type="text"
          name="search"
          id="search-bar"
          placeholder="Search Name or Email"
          onChange={handleInputChange}
        />
      </div>
      <DetailsRows input={searchInput} />
    </>
  );
}

export default Search;
