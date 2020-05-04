import React from 'react';
import './perfilCapa.css'
import TabsPerfil from '../layout/tabsPerfil'
import CadastrarPetModal from './cadastrarPetModal';

const perfilCapa = () => {
	return(
		<section  className='section perfil-capa '>
			<div className="row">
				<div className="col s12 m2	">
					<img className="responsive-img circle perfil-foto" alt="" src="https://pbs.twimg.com/profile_images/378800000435627552/b5de73bd2853881438d261ad7994e0b3.jpeg"		/>
				</div>
				<div className="perfil-nome ">
					<h3>Frank</h3>
				</div>
				<div className='container'>
					<div className="right">
						<CadastrarPetModal/>
					</div>
					<h5 className="">Animais Cadastrados: 5</h5>
					<h5 className="">Animais Doados: 0</h5>
				</div>

			</div>
		</section>
		)
		}

export default perfilCapa