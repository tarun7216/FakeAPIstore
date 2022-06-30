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
  const [categories,setCategories] = useState("")
  const [categoryResults, setCategoryResults] = useState()
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
  
  const categoryItems = (categoryValue) => {
    setCategories(categoryValue);
    if (categories !== "") {
      const categoriedData = data.filter((items) => {
        return Object.values(items)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setCategoryResults(categoriedData);
    } else {
        setCategoryResults(data);
    }
  };

// Used to Form Submit
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => console.log(json));
  };
  const categoryApi = () => fetch("https://fakestoreapi.com/products/categories")
                            .then((response) => response.json())
                            .then((json) =>setCategories(json))
                            

  const CallAPI = () =>
    fetch(API_URL)
      .then((res) => res.json())
      // .then(json => console.log(json))
      .then((json) => setData(json));

  useEffect(() => {
    CallAPI();
    categoryApi();
  }, []);
  return (
    <div>
      <center>
            <h4>Fake Store APi</h4>
                <form onSubmit={submitHandler}>
                <input type="text" value={searchInput} onChange={(e) => searchItems(e.target.value)} />
                <input type="submit" value="Search" />
                <select onChange={(e) => categoryItems(e.target.value)}>
                    <option value="all">Category</option>
                        {(categoryResults || []).map((value,index) => {
                            console.log(value)
                            return(
                                <option key={index} value={value}>{value}</option>
                            )
                        })}
                </select>
        </form>
            <button onClick={viewHandler}>List</button>
        
        {isSubmit ? <Grid data={filteredResults} /> : <List data={filteredResults} />}
      </center>
    </div>
  );
};

export default Homepage;
