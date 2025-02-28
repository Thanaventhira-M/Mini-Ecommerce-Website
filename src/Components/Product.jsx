import React from 'react'
import './Product.css'
import Like from './Like'

const Product = ({props,addTocart}) => {
  return (
    <div>
      <div id='Main-Products'>
       <div id='main-child'>
       <div id='description'>
            <h2>{props.name}</h2>
            <Like addTocart={()=>addTocart(props)}/>
        </div>
        <div id='Products'>
            <img src={props.source} alt="" className='pr-img' />
        </div>
        <div id='rate'>
        <p>Price: ₹ {props.price}<span id="final-price"></span></p>
          <button>Buy</button>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Product
