import React, { Component } from 'react'
import GaleriaPet from '../project/galeriaPet'
import InfosPet from '../project/infosPet'


class petPage extends Component {
	render() {

		return (
			<section>
				<div className="row">
					<GaleriaPet/>
					<InfosPet/>
					
				</div>
			</section>
		)
	}
}


export default petPage;