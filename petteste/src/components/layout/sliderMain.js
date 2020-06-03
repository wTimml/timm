import React from 'react';
import { NavLink } from 'react-router-dom'
import M from 'materialize-css';          

  const SliderMain = () => {

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems);
  });



    return(


		<div className="slider white">
			<ul className="slides">
		      <li>
		        <img src="https://lorempixel.com/580/250/nature/1" alt=""/> 
					<div className="caption center-align">
		          <h3>This is our big Tagline!</h3>
						<h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
		        </div>
		      </li>
		      <li>
		        <img src="https://lorempixel.com/580/250/nature/2" alt=""/>
					<div className="caption left-align">
		          <h3>Left Aligned Caption</h3>
						<h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
		        </div>
		      </li>
		      <li>
		        <img src="https://lorempixel.com/580/250/nature/3" alt=""/>
					<div className="caption right-align">
		          <h3>Right Aligned Caption</h3>
						<h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
		        </div>
		      </li>
		      <li>
		        <img src="https://lorempixel.com/580/250/nature/4" alt=""/>
					<div className="caption center-align">
		          <h3>This is our big Tagline!</h3>
						<h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
		        </div>
		      </li>
		    </ul>
		  </div>
      		
          )



  
}

export default SliderMain;