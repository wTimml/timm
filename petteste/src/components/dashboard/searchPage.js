import React, { Component } from 'react'
import SearchButton from '../layout/searchButton'
import SearchSideScroll from '../layout/searchSideScroll'
import PetsList from '../project/petsList'
import {Pets} from '../project/pets'
import OrderBySelect from "../layout/orderBySelect.js"
import Pagination from '../layout/pagination'
import PetPage from '../dashboard/petPage'

class searchPage extends Component {

	render(){
		return(

			<section className="white">
				
			 	<div className="container">
			 		<SearchButton className=""/>
			 	</div>

			 	<div className="row">
			 		<div className="col s12">
			 			<OrderBySelect/>
			 		</div>
				 	<div className="col s12 m2">
				 		<SearchSideScroll/>
				 	</div>
				 	<div className="col s12 m8">

						<PetsList pets={Pets}/>
						<div className="row">
				 		</div>
						<hr class="divider" tabindex="-1"></hr>
						<Pagination />
				 	</div>
				 	<div className="col s12 m2">
				 		<h1>teste</h1>
				 	</div>
			 	</div>

			 </section>
			)
		}
}

//const mapStateToProps= (state) => {
//	return {
//		projects: state.project.projects
//	}
//}
export default searchPage;