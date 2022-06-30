import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Homepage'
import Productdetails from './Productdetails'
import Productpage from './Productpage'

const Main = () => {
  return (
  <Router>
     <Routes>
        <Route exact path= '/' element={<Homepage />} />
        <Route exact path= '/product/:productid' element={<Productpage/>} />
        <Route exact path= '/productdetails' element={ <Productdetails />} />
   </Routes>
  </Router>
    
  )
}

export default Main
