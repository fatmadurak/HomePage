import React from 'react';
import "./navbar.css";


import Button from '../button/Button.js';

 const NavBar = () => {
  return (
    
    <section>

     <div className="nav-bar">
      
       <div className='logo'>
         <span>GD.</span>
       </div>
     
      <div className='lists'>
        <ul className='navlists'>
          <li><a className='list' href="/">About</a></li>
          <li><a className='list' href="/">Services</a></li>
          <li><a className='list'href="/">Our Work</a></li>
          <li>{<Button color={"blue"} children={"Enroll now"}/>}</li>
        </ul>
      </div>


     </div> 
     

    </section>
  )
}

export default NavBar;