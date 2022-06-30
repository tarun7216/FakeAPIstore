import React from 'react'
import {Link} from 'react-router-dom'

const List = ({data}) => {
  return (
    <div>
        {(data || []).map((items,index) => {
             const Linkpath = '/product/:productid'.replace(":productid", items.id)
        // console.log(index)
        return(
            <div>
                <ul key={items.id}>
                    <li>{items.title}</li>
                    <li><img src={items.image}  alt={items.title}/></li>
                    <Link to={Linkpath} state={items.id}><button>ProductPage</button></Link>
                </ul>
            </div>
        )
      })}
    </div>
    
  )
}

export default List
