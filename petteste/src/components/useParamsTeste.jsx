import React from 'react'
import { useParams } from 'react-router';

function ParamTeste (){
	const { id } = useParams();
	console.log({id})
	return (<div> User {id} </div>)
}

export default ParamTeste