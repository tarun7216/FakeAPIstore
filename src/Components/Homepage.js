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
   if (isSubmit === true) {
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
      {/* <!-- Footer --> */}
<footer className="page-footer font-small special-color-dark pt-4">

{/* <!-- Footer Elements --> */}
<div className="container">

  {/* <!--Grid row--> */}
  <div class="row">

    {/* <!--Grid column--> */}
    <div className="col-md-6 mb-4">

      {/* <!-- Form --> */}
      <form className="form-inline">
        <input className="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
          aria-label="Search"/>
        <i className="fas fa-search" aria-hidden="true"></i>
      </form>
      {/* <!-- Form --> */}

    </div>
    {/* <!--Grid column--> */}

    {/* <!--Grid column--> */}
    <div className="col-md-6 mb-4">

      <form className="input-group">
        <input type="text" className="form-control form-control-sm" placeholder="Your email"
          aria-label="Your email" aria-describedby="basic-addon2" />
        <div className="input-group-append">
          <button className="btn btn-sm btn-outline-white my-0" type="button">Sign up</button>
        </div>
      </form>

    </div>
    {/* <!--Grid column--> */}

  </div>
  {/* <!--Grid row--> */}

</div>
{/* <!-- Footer Elements --> */}

{/* <!-- Copyright --> */}
<div className="footer-copyright text-center py-3">© 2020 Copyright:
  <a href="/"> MDBootstrap.com</a>
</div>
{/* <!-- Copyright --> */}

</footer>
{/* <!-- Footer --> */}
    </div>
     
  );
};

export default Homepage;
