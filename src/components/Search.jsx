import { React, useState } from "react";


import "../App.css";

function Search() {
  return (
    <div className="main">

      {/* <div className="search">
        <input type="textfield"
        className="SearchBar"
        placeholder="Search name or email"

        />
      </div> */}
       <span className='search-bar'  >
    <i className="fa fa-search" aria-hidden="true"></i>
    <input placeholder="&#xF002" ></input>
 </span>
    </div>
  );
}

export default Search;