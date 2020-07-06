import React from 'react';
import Badges from './badges'


const SignInLinks = ({ name, onSignInChange }) => {
   

    return (
        <div>
            <li >
                <Badges />
            </li>
           
            <li><a className="dropdown-trigger" href="#" data-target="dropdownName">{name}</a></li>


            <ul id='dropdownName' className='dropdown-content'>
                <li><a href="#!">Perfil</a></li>
                <li><a href="#!">Configuracoes</a></li>
                <li><a href="#!" onClick={ () => onSignInChange(false) }>Sair</a></li>
            </ul>
       </div>
        )
}

export default SignInLinks;