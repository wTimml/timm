import React from 'react'
import './cards.css'
import {  NavLink } from 'react-router-dom';

const Cards = (props) => {
	return (

		// <div className="row">
		<div className="col s12 m3 testt">

			<div className="flip-card">

			  <div className="flip-card-inner">

			    <div className="flip-card-front">
						<NavLink to={'/petPage/' + props.id} ><img src={props.img} alt=""  height="150" width="150"/></NavLink>
			    </div>

			    <div className="flip-card-back">
			    	<div className="textCard">
				      	<h5>{props.nomePet} </h5>
				    </div>
			    </div>

			  </div>
			</div>
		</div>
	// </div>
		)
}

export default Cards;