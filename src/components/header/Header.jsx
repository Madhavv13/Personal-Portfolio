import React, { useState } from 'react';
import './Header.css';

function Header() {
 const [Toggle,showMenu]=useState(true);
  return (
    <>
     <nav id="desktop_nav">
        <div className="logo">Madhavv Viswanath</div>
        <ul className={Toggle ? "nav_links show_links":"nav_links"}>
            <li><a href="#About">About</a></li>
            <li><a href="#Skill">Skill</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#contact">Contact</a></li>
        
        </ul>
        <div className='ham' onClick={()=>showMenu(!Toggle)}><i class="uil uil-bars"></i></div>
    </nav>
    
    </>
   
  )
}

export default Header
