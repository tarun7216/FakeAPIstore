import React, { useEffect, useState } from "react";
import { API_URL } from "./URL";
import "../App.css";
import Grid from "./Grid";
import List from "./List";

const Homepage = () => {
  
  const [data, setData] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [isSubmit, setIsSubmit] = useState(true)
  const viewHandler = (e) => {
   if (isSubmit == true) {
    setIsSubmit(false)
   } else {
    setIsSubmit(true)
   }
  };
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = data.filter((items) => {
        return Object.values(items)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };

// Used to Form Submit
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  const CallAPI = () =>
    fetch(API_URL)
      .then((res) => res.json())
      // .then(json => console.log(json))
      .then((json) => setData(json));

  useEffect(() => {
    CallAPI();
  }, []);
  return (
    <div>
      <center>
        <h4>Fake Store APi</h4>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={searchInput}
            onChange={(e) => searchItems(e.target.value)}
          />
          <input type="submit" value="Search" />
        </form>
        <button onClick={viewHandler}>List</button>
        {isSubmit ? <Grid data={filteredResults} /> : <List data={filteredResults} />}
      </center>
    </div>
  );
};

export default Homepage;
