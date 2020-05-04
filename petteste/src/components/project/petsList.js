 import React from 'react'
 import Cards from './cards'
	
	
 const PetsList = ({pets}) => {
	return (
		<div>
		{
			pets.map((nomePet, i) => {
		 		return (
					<Cards 
						key={pets[i].id}
						id={pets[i].id} 
						nomePet={pets[i].nomePet}
						nameDono={pets[i].nameDono} 
						img={pets[i].img}
						/>
						);
					}	
				)
			}
		</div>
		)
}

export default PetsList