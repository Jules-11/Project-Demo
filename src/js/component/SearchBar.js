import React, { useState, useRef, useContext } from 'react';
import { Context } from "../store/appContext";

const SearchBar = () => {
    const { store, actions } = useContext(Context);
      const searchRef = useRef();
    
      const searchBarHandler = (e) => {
        e.preventDefault();
        // actions.searchInputHandler(searchRef.current.value);
        actions.searchAPI(searchRef.current.value);
      };

  return (
    <div className="row mt-5 pt-5">
          <div className="col-6 offset-3">
            <form onSubmit={searchBarHandler}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="What's in your fridge"
                  ref={searchRef}
                />
                <div className="input-group-append">
                  <button className="btn btn-secondary" type="submit">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
  )
}

export default SearchBar