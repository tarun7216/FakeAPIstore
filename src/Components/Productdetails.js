import React from 'react'
import {useLocation} from 'react-router-dom'
import '../Components/Productdetails.css'

const Productdetails = () => {
    const location = useLocation();
    const state = location.state;
    console.log(state)
  return (
    <div>
        <center>
           <div className='detailsbox'>
           <b>Id:</b> {state.id} 
            <img src={state.image} alt={state.title}  />
            <br />
            <b>Title:</b> {state.title}  <br />
            <b>Category:</b> {state.category}  <br />
            <b>Description:</b> {state.description}  <br />
            <b> Price:</b> ${state.price}  <br />
            <b>Rating:</b> {state.rating.rate}  &nbsp;
            <b>Count:</b> {state.rating.count}

           </div>
        </center>
    </div>
  )
}

export default Productdetails
