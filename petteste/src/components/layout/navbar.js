import React from 'react';
import { NavLink } from 'react-router-dom';
import SignedOutLinks from './signOutLinks'
import SignedInLinks from './signInLinks'
import './navbar.css';
import Logo from '../logo/logo.png';
import '../dropDownHoverColor.css'



const navbar = ({ isSignedIn, name, onSignInChange}) => {


    return (

        <div className="navbar-fixed" style={{zIndex:'10001'}}>
                <nav>
                    <div className='nav-wrapper container'>

                        <NavLink to='/' className='brand-logo center'><img style={{ paddingTop:'5px'}} alt='' src={Logo} /></NavLink>


                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                        { isSignedIn
                            ? <SignedInLinks name={name} onSignInChange={onSignInChange}/>
                            : <SignedOutLinks />
                        }
                       </ul>

                        <div className=''>
                            <ul id="nav-mobile" className="left hide-on-med-and-down">
                                <li><a className="dropdown-trigger" href="#" data-target="dropdownONG">ONGs</a>
                                    <ul id='dropdownONG' className='dropdown-content'>
                                        <li><a href="#!">ONG 01</a></li>
                                        <li><a href="#!">ONG 02</a></li>

                                    </ul>
                                </li>

                                <li><NavLink to='/'>Dicas</NavLink></li>
                                <li><NavLink to='/'>Contribua!</NavLink></li>
                            </ul>

                            
                            <div id='nav-mobile' className="right show-on-medium-and-down hide-on-med-and-up" >
                                <a href='#' className="dropdown-trigger " data-target="dropdownMobile" >
                                    <i className="fa fa-bars" aria-hidden="true"></i></a>
                                
                                <ul id='dropdownMobile' className='dropdown-content'>
                                    <li><a href="#!">ONGs</a></li>
                                    <li><NavLink to='/'>Dicas</NavLink></li>
                                    <li><NavLink to='/'>Contribua!</NavLink></li>
                                   
                                </ul>
                            </div>
                        </div>

                        
                    </div>
                </nav>
            </div>

        )
       
}

export default navbar;