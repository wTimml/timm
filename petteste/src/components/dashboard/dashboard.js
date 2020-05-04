import React, { Component } from 'react'
import Notifications from './notifications';
import ProjectList from '../project/ProjectList.js'
import { connect } from 'react-redux'

class Dashboard extends Component {
	render(){
		const { projects }= this.props;

		return(

			 <div className ='dashboard container'>
			 	<div className ='row'>
			 	

			 		<div className='col s12 m2'>
			 			<Notifications/>
			 		</div>
			 		<div className='col s12 m8 offset-s1'>
			 			<ProjectList projects={projects}/>
			 		</div>
			 		<div className='col s12 m2 pffset-s1'>
			 			<Notifications/>
			 		</div>

			 			
			 		
			 	</div>
			 </div>

			)
		}
}
const mapStateToProps= (state) => {
	return {
		projects: state.project.projects
	}
}
export default connect(mapStateToProps) (Dashboard);