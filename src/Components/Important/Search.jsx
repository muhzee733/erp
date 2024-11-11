import React from "react";
import {Input } from 'reactstrap';

const Search = ({searchList, placeholder}) => {
  return (
    <div className="search-box">
      <Input
        type="text"
        className="form-control"
        placeholder={placeholder}
        onChange={(e) => searchList(e.target.value)}
      />
      <i className="ri-search-line search-icon"></i>
    </div>
  );
};

export default Search;
