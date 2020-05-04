import React from 'react'
import "./orderBySelect.css"

	const orderBySelect = () => {

		return(

		<div className="container orderContainer">
		  <label className="orderBy">Ordernar por:</label>
		  <select class=" browser-default orderBy">
		    <option className="orderOption"value="1">Option 1</option>
		    <option className="orderOption"value="2">Option 2</option>
		    <option className="orderOption"value="3">Option 3</option>
		  </select>
		</div>
	
		)
	}

export default orderBySelect;