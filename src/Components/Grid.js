import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

const Grid = ({data}) => {
  return (
    <div className='container'>
      {(data || []).map((items,index) => {
        const Linkpath = '/product/:productid'.replace(":productid", items.id)
        // console.log(index)
        return(
            <div>
                <div className="card" key={items.id}>
                    <img src={items.image} alt="Denim Jeans" style={{"width":"50%"}} />
                    <h3>{items.title}</h3>
                    <p class="price">${items.price}</p>
                    <Link to={Linkpath} state={items.id}><button>ProductPage</button></Link>
                </div>
            </div>
        )
      })}
    </div>
  )
}

export default Grid
