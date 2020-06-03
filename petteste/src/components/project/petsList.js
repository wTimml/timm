 import React from 'react'
 import Cards from './cards'

import "react-multi-carousel/lib/styles.css";
	
 const PetsList = ({pets}) => {
	 return (
		 <div >
		{
			pets.map((nomePet, i) => {
				return (
					<div >
						<Cards 
							key={pets[i].id}
							id={pets[i].id} 
							nomePet={pets[i].nomePet}
							nameDono={pets[i].nameDono} 
							img={pets[i].img}
							/>
					</div>
						);
					}	
				)
			}
		</div>
		)
}

export default PetsList