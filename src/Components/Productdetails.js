import React from 'react'
import {useLocation} from 'react-router-dom'

const Productdetails = () => {
    const location = useLocation();
    const state = location.state;
    console.log(state)
  return (
    <div detailscard>
        

    </div>
  )
}

export default Productdetails
