import React from 'react'
import M from 'materialize-css'

class modalAdote extends React.Component {
	render() {

		document.addEventListener('DOMContentLoaded', function () {
			var elems = document.querySelectorAll('.modal');
			var instances = M.Modal.init(elems);
		});

		return (

			<div>

				<a className="waves-effect waves-light btn btn-large modal-trigger orange" href="#lastStep">Adotar</a>


				<div id="lastStep" className="modal">
					<div className="modal-content">
						<h4 className='center'>Infos finais de adocao</h4>
						<p> informacoes do que e necessario para adotar( espaco na casa, comida, etc)</p>
						
					</div>

					<div className="modal-footer">
						<a href="#!" className="modal-close waves-effect waves-orange btn-flat">Adotar!</a>
					</div>

				</div>
			</div>
		)
	}
}

export default modalAdote