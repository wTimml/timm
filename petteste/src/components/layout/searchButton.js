import React, { Component } from 'react';
import "./searchButton.css"

class searchButton extends Component{

		

	render() {

		const { onFullSearch } = this.props
		return(

		<div className="searchTotal">

				<div className="searchArea">
					<div className="container">
						<div className="row">
							<div className="col s12 m6">
								  <label>Browser Select</label>
								  <select class="browser-default">
								    <option value="" disabled selected>Choose your option</option>
								    <option value="1">Option 1</option>
								    <option value="2">Option 2</option>
								    <option value="3">Option 3</option>
								  </select>
							</div>
							<div className="col s12 m6">
								  <label>Browser Select</label>
								  <select class="browser-default">
								    <option value="" disabled selected>Choose your option</option>
								    <option value="1">Option 1</option>
								    <option value="2">Option 2</option>
								    <option value="3">Option 3</option>
								  </select>
							</div>
							<div className="col s12 m6">
								  <label>Browser Select</label>
								  <select class="browser-default">
								    <option value="" disabled selected>Choose your option</option>
								    <option value="1">Option 1</option>
								    <option value="2">Option 2</option>
								    <option value="3">Option 3</option>
								  </select>
							</div>
							<div className="col s12 m6">
								  <label>Browser Select</label>
								  <select class="browser-default">
								    <option value="" disabled selected>Choose your option</option>
								    <option value="1">Option 1</option>
								    <option value="2">Option 2</option>
								    <option value="3">Option 3</option>
								  </select>
							</div>
									
								</div>
								<div className="searchButton">
									<a className="btn-large orange darken-1" onClick={() => onFullSearch('true')} >Pesquisar</a>
								</div>
					</div>
				</div>
				</div>
						
			
			
			)


				}
			
}

export default searchButton;