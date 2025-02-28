import React from 'react'
import './Cart.css';
const Card = ({mycart}) => {
  return (
    <div>
      <div>
        {mycart?.length ===0 ?(
          <div>Your Card is Empty Now</div>
        ):(
          <div className='products-containers'>{mycart.map((item)=>(
            <div className='Products-childs'><h2>Product :{item.name}</h2>
            <hr />
            <img src={item.source} alt="" />
            <hr />
            <h2>price: {item.price}</h2>
            <button>Buy</button>
            </div>
          ))}</div>
        )}
      </div>
    
    </div>
    
  )
}

export default Card
