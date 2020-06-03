import React, { Component } from 'react'
import "./franLayout.css"
import SliderMain from '../layout/sliderMain'
import InLinePets from './inLinePets.js'


class franLayout extends Component {
	render(){
		//const { projects }= this.props;
		 

		return(
			 <section>
				<SliderMain />

				<div style={{ paddingTop: '3px' }}>
					<h3 className="center">Disponiveis</h3>
					<InLinePets />
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