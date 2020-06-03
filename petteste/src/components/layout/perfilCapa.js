import React from 'react';
import './perfilCapa.css'
import TabsPerfil from '../layout/tabsPerfil'
import CadastrarPetModal from './modalCadPet';

const perfilCapa = ({name,doados,adotados, cadastrados }) => {
	return(
		<section  className='section perfil-capa '>
			<div className="row">
				<div className="	">
					<img className="perfil-foto" alt="" src="https://pbs.twimg.com/profile_images/378800000435627552/b5de73bd2853881438d261ad7994e0b3.jpeg"/>
				</div>
				<div className="perfil-nome ">
					<a className='perfil-nome'>{name}</a>
				</div>
				<div className='container'>
					<div className="right">
						<CadastrarPetModal/>
					</div>
					<ul>
						<li><a className="perfil-subText">Animais Cadastrados: {cadastrados}</a></li>
						<li><a className="perfil-subText">Animais Doados: {doados}</a></li>
						<li><a className="perfil-subText">Animais Adotados: {adotados}</a></li>
					</ul>
				</div>

			</div>
		</section>
		)
		}

export default perfilCapa