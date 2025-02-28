import React from 'react'
import Product from './Product'
import Navigation from './Navigation'
import './Home.css';
const Home = ({setCart}) => {
 const nav1={name:"Shirts Collection"} 
 const product1 ={name:"Casual Shirt",price:"2000",source:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTkxhUAzWq379TebwZAESw2GefSEvFar49ez7VsqoXpV73vATiBv-h-7um8-enzhU9B80X0eiH4RcKeO1AvirUdwexNoKv9JxY1-9mHGySDmsnHe69Fnd-ZAQ&usqp=CAc"} 
 const product2 ={name:"Casual Shirt",price:"2000",source:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS6Tx29-p10FKoVE520XZlgFs_9Owm0HS8pFlF8msmSFNAUMKv-I1A1x7JUt5dD3uss3PSPkpBseIcMqW_vQ4GRE30J8VwtX7iKTtp50s9XHEqMIPWteps4i2bBMVAORFTdC2dBvpaM1w&usqp=CAc"} 
 const product3 ={name:"Casual Shirt",price:"2000",source:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ2ig6dW36hBvBI0Fqg2x0P2RYU6mo0arvxm4kyRIMGH0p2MMO6jLpZPZ18OTJhnur4DWzUtaFKEoMouWdQO7SucZGOUzzUqt0A4OrMpa6wzf21yVwFl1mha_jVr70DPfW9tqCq11s&usqp=CAc"} 
 const product4 ={name:"Casual Shirt",price:"2000",source:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR0BdDIBDoxdtiyry16_vLVLtl7HQ6BNw5Yic_TKuHpk6BsmD52Ly7ukOdiWYGFnJvsDtqRTbwMPOTOKOAolUdGbW5IjDsF8YoS1K1z5wEziWgFekGpNcu0CEo&usqp=CAc"} 
 const product5 ={name:"Casual Shirt",price:"2000",source:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSIElhqmZJqxMghLUKSH4Fg_bHzXkQwXQ2mU4If9aAtbmOXEynz2sb13ymoL0px3e5ooTkZxm8rt5zEyoth-Ywer4J8zhe2cZa1Ce31-Ucsvb5bvFKqXnK9&usqp=CAE"} 
 const product6 ={name:"Casual Shirt",price:"2000",source:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTKlmjNLZwzX58WN97-hQUhLXDReZ3Kdi6VFVQu82WlddUVHarE9UwZsqV_Mk4PkaYmdrWsO6xW9uJYb8YPUL0eZb-NvXOvaD-Iw_hI-DQ-5Twr21j9Dw1eZvg&usqp=CAc"} 
 const product7 ={name:"Casual Shirt",price:"2000",source:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ9pWOc8vBxLv6VlrpRRtDQjqGG4gChZZx2HF3gQffZqwK9CI-xBF5FeCzes5vi4vd9VYOF29CoFvzBVOYkNZnDtIKDvFZUdla7lVeZeEVMNI9JjunWqDzrAw&usqp=CAc"} 
 const product8 ={name:"Casual Shirt",price:"2000",source:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSm5fLt-w1fAhT3wGKZAbpkYCoCRjfAzyRgMPoiNs1D3uY2b7Z1EnDAMJIFPLbLgdKHlLX-jp5WRuyz8r7A9EI-PXRQSC-neA5qbOurzc4JInvJGVPOMVgTcg&usqp=CAc"} 
 
 const nav2={name:"Girls Dress Collections "} 

 const addTocart =((product)=>{
  setCart((prevData)=>[...prevData,product])
 })

 return (
    <div>
      <Navigation props={nav1}/>
      <div className='Product-Container'>
        <Product  props={product1}addTocart={addTocart} />
      <Product  props={product2} addTocart={addTocart}/>
      <Product  props={product3} addTocart={addTocart}/>
      <Product  props={product4} addTocart={addTocart}/>
      <Product  props={product5} addTocart={addTocart}/>
      <Product  props={product6} addTocart={addTocart}/>
      <Product  props={product7} addTocart={addTocart}/>
      <Product  props={product8} addTocart={addTocart}/>
      </div>
      <Navigation props={nav2}/>
    
    </div>
  )
}

export default Home
