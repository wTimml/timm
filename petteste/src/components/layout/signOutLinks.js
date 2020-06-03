import React from 'react';
import { NavLink } from 'react-router-dom'


const SignOutLinks = () => {
    return(
        <ul id="nav-mobile" className="right">

            <li><a className='sidenav-trigger show-on-large' data-target='slide-out' >Entrar</a></li>

            <li><a className='sidenav-trigger show-on-large' data-target='slide-out2'>Registrar</a></li>
          </ul>
        
          )

}

export default SignOutLinks;