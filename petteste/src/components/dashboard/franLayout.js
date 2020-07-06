import React, { Component } from 'react'
import "./franLayout.css"
import SliderMain from '../layout/sliderMain'
import InLinePets from './inLinePets.js'
import createHistory from 'history/createBrowserHistory'

class franLayout extends Component {
	render(){
		//const { projects }= this.props;
		 
		
		return(
			<section>

				<SliderMain />

				<div style={{ paddingTop: '3px' }}>
					<h3 className="center" style={{color:'orange'}}>Disponiveis</h3>
					<InLinePets />
					<div className="center" style={{paddingBottom:'10px'}}>
						<a className="btn-large orange darken-1" href="/searchPage">Busque Mais</a>
					</div>
				</div>
			 			<SliderMain/>
			 </section>
			)
		}
}
//const mapStateToProps= (state) => {
//	return {
//		projects: state.project.projects
//	}
//}
export default franLayout;