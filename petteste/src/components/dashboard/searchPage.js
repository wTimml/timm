import React, { Component } from 'react'
import SearchButton from '../layout/searchButton'
import SearchSideScroll from '../layout/searchSideScroll'
import PetsList from '../project/petsList'
import {Pets} from '../project/pets'
import OrderBySelect from "../layout/orderBySelect.js"
import Pagination from '../layout/pagination'


class searchPage extends Component {

	

	render(){
		return(

			<div className="white">

			 	<div className="row">
			 		<div className="col s12">
			 			<OrderBySelect/>
			 		</div>
					<div className="col s12 m2">
						
						<SearchSideScroll /> 
						
				 	</div>
					<div className="col s12 m8" >

						<PetsList pets={Pets}/>
						

						<div className="row">
				 		</div>
						<hr className="divider" tabIndex="-1"></hr>
						<Pagination />
				 	</div>
				 	<div className="col s12 m2">
				 		<h1>teste</h1>
				 	</div>
			 	</div>

			 </div>
			)
		}
}

//const mapStateToProps= (state) => {
//	return {
//		projects: state.project.projects
//	}
//}
export default searchPage;