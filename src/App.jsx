import React, { useState } from 'react'
import Home from './Components/Home'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import About from './Components/About'
import Login from './Components/Login'
import Card from './Components/Card'
import './App.css';
const App = () => {
const [cart,setCart] =useState([]) 
const [user, setUser]=useState("Guest") 
const [profile,setProfile] =useState(
  {
    src:"https://images.freeimages.com/fic/images/icons/2711/free_icons_for_windows8_metro/512/guest.png"
  }
)

  return (
    <div>
      <header>      
        <div id='Profile-Pic'><img src={profile.src}alt="Profile" width="50" height="80" style={{ borderRadius: '50%' }} />
         <div id='name'>
          <h3>{user}</h3>
         </div>
        </div>
           <div id='list-Items'>
               <p><Link to={'/'} className='li'>Home</Link></p>
               <p><Link to={'/About'} className='li'>About</Link></p>
               <p><Link to={'/Login'} className='li'>Login</Link></p>
               <p><Link to={'/Cart'} className='li'>Cart</Link></p>
           </div>
      </header>
   <Routes>
    <Route path='/' element={<Home setCart={setCart}/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Login' element={< Login setUser={setUser} setProfile={setProfile}/>}></Route>
    <Route path='/Cart' element={<Card mycart={cart}/>}></Route>
   </Routes>
    </div>
  )
}

export default App
