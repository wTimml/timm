import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SignedOutLinks from './signOutLinks'
import SignedInLinks from './signInLinks'
import './navbar.css';
          
  const navbar = () => {

    return(

          <div className="navbar-fixed">
            <nav>
              <div className='nav-wrapper'>
            
              <Link to='/' className = 'brand-logo center'>Logo</Link>  
              <SignedInLinks/>
              <SignedOutLinks/>
              <ul id="nav-mobile" class="left">
                <li><NavLink to='/'>Ongs</NavLink></li>
                <li><NavLink to='/'>Dicas</NavLink></li>
                <li><NavLink to='/'>Contribua!</NavLink></li>
              </ul>
              </div>
            </nav>
          </div>
      
          )

}

export default navbar;