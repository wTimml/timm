import React from 'react';
import Badges from './badges'


const SignInLinks = ({ name, onSignInChange }) => {
   

    return (
        <ul id="nav-mobile" className="right">

            <li >
                <Badges />
            </li>
           
            <li><a className="dropdown-trigger" href="#" data-target="dropdownName"><i className="material-icons right">arrow_drop_down</i>{name}</a></li>


            <ul id='dropdownName' className='dropdown-content'>
                <li><a href="#!">Perfil</a></li>
                <li><a href="#!">Configuracoes</a></li>
                <li><a href="#!" onClick={ () => onSignInChange(false) }>Sair</a></li>
            </ul>
       
        </ul>
        )
}

export default SignInLinks;