import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { API_URL } from "./URL";


const Productpage = () => {
    const [productData, setProductData] = useState("")
    const location = useLocation();
    const state = location.state;
    // console.log(state);
    // const ProductAPI = async () => {
    //     // console.log(API_URL+ state)
    //     await fetch(API_URL + state)
    //     .then((res) =>res.json)
    //     .then((json) => setProductData(json))
    // }
    useEffect (() => {
       fetch(API_URL+ state)
       .then(res=>res.json())
       .then(json=>setProductData(json))
    }, [])
  return (
    <div>
      This is from Product ProductPage
      {Object.keys(productData).map((product, index1) => {
        return(
            <div key={product.id}>
                {product.title}
            </div>
        )

      })}
    </div>
  )
}

export default Productpage
