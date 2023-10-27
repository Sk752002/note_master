import React from 'react'
import keep from './images/keep.png'

function Header() {
  return (
 <>
     <div className='header'>
     
        <img src={keep} alt="logo" width='70px' height='50px'/>
    
        <h1 className='h'>Note Master</h1>

     </div>
 </>
  );
}

export default Header;