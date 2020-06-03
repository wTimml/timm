import React from 'react';
import { NavLink } from 'react-router-dom';
import SignedOutLinks from './signOutLinks'
import SignedInLinks from './signInLinks'
import './navbar.css';
import Logo from '../logo/logo.png';
import '../dropDownHoverColor.css'
import M from 'materialize-css'


const navbar = ({ isSignedIn, name, onSignInChange}) => {

    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.dropdown-trigger');
        var instances = M.Dropdown.init(elems, {
            coverTrigger: false,
            constrainWidth: false
        });
    });
        return (

            <div className="navbar-fixed">
                <nav>
                    <div className='nav-wrapper container'>

                        <NavLink to='/franLayout' className='brand-logo center'><img style={{ paddingTop:'5px'}} alt='' src={Logo} /></NavLink>
        
                        { isSignedIn
                            ? <SignedInLinks name={name} onSignInChange={onSignInChange}/>
                            : <SignedOutLinks />
                        }
                       

                        <div className=''>
                            <ul id="nav-mobile" className="left">
                                <li><a className="dropdown-trigger" href="#" data-target="dropdownONG">ONGs</a>
                                    <ul id='dropdownONG' className='dropdown-content'>
                                        <li><a href="#!">ONG 01</a></li>
                                        <li><a href="#!">ONG 02</a></li>

                                    </ul>
                                </li>

                                <li><NavLink to='/'>Dicas</NavLink></li>
                                <li><NavLink to='/'>Contribua!</NavLink></li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </div>

        )
       
}

export default navbar;