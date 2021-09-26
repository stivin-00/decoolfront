import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {  FaSearch } from 'react-icons/fa';

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => ({ ...state }));
  const { text } = search;

  const history = useHistory();
  
//redux push
  const handleChange = (e) => {
    dispatch({
      
      type: "SEARCH_QUERY",
      payload: { text: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/shop?${text}`);
  };

  return (
    <div className="newsletter">
      <form className="forms">
				<input 
        onChange={handleChange}
        type="search"
        value={text}
        className="input"
        placeholder="Search products here"
      />
				<button class="newsletter-btns" onClick={handleSubmit} style={{ cursor: "pointer" }}><i class=""><FaSearch/></i> Search</button>
			</form>
    </div>
    // <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
      
    //   <input
    //     onChange={handleChange}
    //     type="search"
    //     value={text}
    //     className="form-control mr-sm-2"
    //     placeholder="Search"
    //   />
    //   <SearchOutlined onClick={handleSubmit} style={{ cursor: "pointer" }} />
    // </form>
  );
};

export default Search;
