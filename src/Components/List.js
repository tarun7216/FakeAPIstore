import React from 'react'
import {Link} from 'react-router-dom'

const List = ({data}) => {
  return (
    <div>
        {(data || []).map((items,index) => {
        // console.log(index)
        return(
            <div>
                <ul key={items.id}>
                    <li>{items.title}</li>
                    <li><img src={items.image}  alt={items.title} style={{"width":"50%"}} /></li>
                    <Link to='/productpage' state={items.id}><button>ProductPage</button></Link>
                </ul>
            </div>
        )
      })}
    </div>
    
  )
}

export default List
