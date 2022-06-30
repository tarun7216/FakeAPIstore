import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { API_URL } from "./URL";
import '../Components/productpage.css'


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
    //    .then(json=>console.log(json))
       .then(json=>setProductData(json))
    }, [state])
    // console.log(productData)
  return (
    // <div className='tablebox'>
    //  <center>
    //     <img src={productData.image} alt={productData.title} style={{"width":"40%"}} />
    //     <table>
    //         <tr>
    //             Id: <td>{productData.id}</td>
    //         </tr>
    //         <tr>
    //             Title:<td>{productData.title}</td>
    //         </tr>
    //         <tr>
    //             Description:<td>{productData.description}</td>
    //         </tr>
    //         <tr>
    //             Price:<td>{productData.price}</td>
    //         </tr>
    //     </table>
    //     <Link to='/productdetails' details={productData}><button>ProductDetaispage</button></Link>
    //  </center>
    // </div>
    <div className="gallery">
      <div className="content">
        <img src={productData.image}>
        <h3>{productData.title}</h3>
        <h6>${productData.price}</h6>
        
        <button className="buy-1">Buy Now</button>
      </div>
  )
}

export default Productpage
