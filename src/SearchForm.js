import React from "react";
import "./SearchForm.css";

const SearchForm = props => (
  <form className="search-form" onSubmit={props.onFormSubmit}>
    <input
      type="text"
      placeholder="enter search term"
      onChange={props.onSearchChange}
    />
    <button>Search</button>
    <button type="button" onClick={props.onFeelingLuckyClick}>
      I'm Feeling Funny 🤪
    </button>
  </form>
);
export default SearchForm;
