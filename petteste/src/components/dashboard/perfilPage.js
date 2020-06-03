import React from 'react'
import PerfilCapa from '../layout/perfilCapa'
import TabsPerfil from '../layout/tabsPerfil'

const searchPage = ({name,doados,adotados,cadastrados }) => {

		return (
			<div className="">
				<div className="">
					<PerfilCapa name={name} doados={doados} adotados={adotados} cadastrados={cadastrados}/>
					<TabsPerfil />
				</div>
			</div>
	)
		
}

export default searchPage;