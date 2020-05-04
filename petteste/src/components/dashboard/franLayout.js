import React, { Component } from 'react'
import "./franLayout.css"
import SliderMain from '../layout/sliderMain'
import InLinePets from './inLinePets.js'


class franLayout extends Component {
	render(){
		//const { projects }= this.props;
		 

		return(
			 <section>
			 			<SliderMain/>
			 			<InLinePets/>
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