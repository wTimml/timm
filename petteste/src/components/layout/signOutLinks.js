import React from 'react';
import { NavLink } from 'react-router-dom'
          
  const SignOutLinks = () => {

    return(
          <ul id="nav-mobile" class="right">
            <li><NavLink to='/signin'>Entrar</NavLink></li>
            <li><NavLink to='/signup'>Registrar</NavLink></li>
          </ul>
        
          )

}

export default SignOutLinks;