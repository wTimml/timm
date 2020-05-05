import React, { Component } from 'react'
import "./searchSideScroll.css"

const SearchSideScroll = () => {
		
		return(

			<div className="leftScroll">
				<div className="leftScrollChips">
					<div className="row">

						<div class="chip">
							Tag
							<i class="close material-icons">close</i>
						</div>
				
					</div>
				</div>

				<div className="leftScrollSelect">
					  <label>Animal</label>
						  <select class="browser-default">
						    <option value="" disabled selected>Choose your option</option>
						    <option value="1">Option 1</option>
						    <option value="2">Option 2</option>
						    <option value="3">Option 3</option>
						  </select>
					 <label>Porte</label>
						  <select class="browser-default">
						    <option value="" disabled selected>Choose your option</option>
						    <option value="1">Option 1</option>
						    <option value="2">Option 2</option>
						    <option value="3">Option 3</option>
						  </select>
					 <label>Idade</label>
						  <select class="browser-default">
						    <option value="" disabled selected>Choose your option</option>
						    <option value="1">Option 1</option>
						    <option value="2">Option 2</option>
						    <option value="3">Option 3</option>
						  </select>

					<a className="btn orange darken-1" onclick =''>Pesquisa rápida</a>
				</div>

			</div>
			)
	

}

export default SearchSideScroll;