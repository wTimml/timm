import React from 'react'
import ModalAdote from '../layout/modalAdote'
import { useParams } from 'react-router'
import { Pets } from './pets'

function InfosPet() {

	const { id } = useParams()

	return (

		<div className=' section project-details'>
			<div className="row col s12 m6 right">
				<div className='card z-depth-0'>
				<div className='card-content'>

						<span style={{textTransform:'uppercase'}} className='card-title'>{Pets[id].nomePet} </span>

					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

				</div>

				<div className='card-action right'>
						<ModalAdote/>

				</div>
		</div>
		</div>

		</div>
        )
}

export default InfosPet;