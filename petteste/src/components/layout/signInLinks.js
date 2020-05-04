import React from 'react';
import { NavLink } from 'react-router-dom'
import M from 'materialize-css'
          
  const SignInLinks = () => {

  	document.addEventListener('DOMContentLoaded', function() {
  	  	var elems = document.querySelectorAll('.dropdown-trigger');
    	var instances = M.Dropdown.init(elems, {
    		coverTrigger:false,
    		constrainWidth:false
    	});
  });

    return(
          <ul id="nav-mobile" className="right">

            <li><NavLink to='/'><i className="material-icons left">question_answer</i></NavLink></li>
            <li><a className="dropdown-trigger" href="#" data-target="dropdown1"><i className="material-icons right">arrow_drop_down</i>Lucas</a></li>



			  <ul id='dropdown1' class='dropdown-content'>
			    <li><a href="#!" onclick="">Gerenciar</a></li>

			    <hr class="divider" tabindex="-1"></hr>
			    <li><a href="#!"><i className="material-icons">view_module</i>Configurações</a></li>
			    <li><a href="#!"><i className="material-icons">cloud</i>Logout</a></li>
			  </ul>

          
          </ul>
        
          )

}

export default SignInLinks;