import React, { Component } from 'react'
import './cards.css'

const Cards = (props) => {
	return(

	// <div className="row">
		<div className="col s12 m3">

			<div class="flip-card">

			  <div class="flip-card-inner">

			    <div class="flip-card-front">
						<img src={props.img} alt="" height="200" width="200"/>
			    </div>

			    <div class="flip-card-back">
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