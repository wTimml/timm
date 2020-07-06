import React, { useState } from 'react'
//import { useLocation, useHistory } from 'react-router'


function SignUp({ props }) {

	const [form, setValues] = useState({
		USER_ID: '',
		USER_BIRTHDAY: '',
		USER_EMAIL: '',
		USER_PASSWORD: '',
		USER_NAME: '',
	})



	const handleChange = (e) => {
		setValues({
			...form,
			[e.target.id]: e.target.value
		})
		console.log(form)
	}
//	const history = useHistory()

	const handleSubmit = (e) => {


		e.preventDefault();
		fetch('http://localhost:3001/register', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				USER_EMAIL: form.USER_EMAIL,
				USER_PASSWORD: form.USER_PASSWORD,
				USER_NAME: form.USER_NAME,
				USER_BIRTHDAY: form.USER_BIRTHDAY
			})
		})
			.then(response => response.json())
			.then(user => {
				if (user) {
					//	this.props.loadUser(user)
					//	this.props.onSignInChange(true)
				}
			})
			.catch(err => console.log(err))
	}



	return (

		<div className=''  >
			<ul id="slide-out2" className="sidenav" style={{ background: '#FDE4F2' }}>
				<li><div className="user-view" style={{ paddingTop: '60px' }}>
					<h5 className="center show-on-large">Cadastrar</h5>
				</div>
				</li>



				<div className='container'  >
						
						<li>
							<div className='input-field '>
								<label htmlFor='USER_NAME'>Nome</label>
								<input type='text' id='USER_NAME' onChange={handleChange} />
							</div>
						</li>
						<li>
							<div className='input-field'>
								<label htmlFor='USER_EMAIL'>Email</label>
								<input type='email' id='USER_EMAIL' onChange={handleChange} />
							</div>
						</li>
						<li>
							<div className='input-field'>
								<label htmlFor='USER_BIRTHDAY'></label>
								<input type='date' id='USER_BIRTHDAY' onChange={handleChange} />
							</div>
						</li>
						<li>
							<div className='input-field'>
								<label htmlFor='USER_PASSWORD'>Password</label>
								<input type='password' id='USER_PASSWORD' onChange={handleChange} />
							</div>
					</li>
					<li>
						<div className="">
							<label style={{fontSize:'15px'}}for="avatar">Foto de Perfil</label>

							<input type="file"
								id="avatar" name="avatar"
								accept="image/png, image/jpeg">
							</input>
						</div>
					</li>
						<li>
							<div className='input-field' style={{ float: 'right' }}>
								<button className='btn pink lighten-1 z-depth-1 sidenav-close' onClick={handleSubmit} >Registrar</button>
							</div>
						</li>

				</div>

			</ul>
		</div>
	)

}

export default SignUp