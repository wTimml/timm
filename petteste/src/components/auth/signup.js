import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser} from '../../store/actions/userActions'
import { Link, NavLink } from 'react-router-dom';

class SignUp extends Component {

	constructor(props) {
		super(props)
		this.state = {
			USER_ID: '',
			USER_BIRTHDAY: '',
			USER_EMAIL: '',
			USER_PASSWORD: '',
			USER_NAME: '',
		}
	}

	handleChange = (e) => {
	this.setState({
		[e.target.id]: e.target.value
	})
}

handleSubmit =(e) => {
	e.preventDefault();
	console.log(this.state)

	fetch('http://localhost:3001/register', {
		method: 'post',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			email: this.state.USER_EMAIL,
			password: this.state.USER_PASSWORD,
			name: this.state.USER_NAME,
			birthday: this.state.USER_BIRTHDAY
		})
	})
		.then(response => response.json())
		.then(user => {
			if (user) {
				this.props.loadUser(user)
			}
		})
		.catch(err => console.log(err))
	}

	render() {
		
		return (
				<div className='' >
				<ul id="slide-out2" className="sidenav" style={{ background: '#FDE4F2' }}>
					<li><div className="user-view">
						<h5 className="center show-on-large">Cadastrar</h5>
					</div>
					</li>

					<div className='container'>
						<form onSubmit={this.handleSubmit} className=''>
							
							<li>
								<div className="">
									<b>IMG</b>
								</div>
							</li>
							<li>
								<div className='input-field '>
									<label htmlFor='USER_NAME'>Nome</label>
									<input type='text' id='USER_NAME' onChange={this.handleChange} />
								</div>
							</li>
							<li>
								<div className='input-field'>
									<label htmlFor='USER_EMAIL'>Email</label>
									<input type ='email' id='USER_EMAIL' onChange={this.handleChange}/>
								</div>
							</li>
							<li>
								<div className='input-field'>
									<label htmlFor='USER_BIRTHDAY'></label>
									<input type='date' id='USER_BIRTHDAY' onChange={this.handleChange} />
								</div>
							</li>
							<li>
								<div className='input-field'>
									<label htmlFor='USER_PASSWORD'>Password</label>
									<input type ='password' id='USER_PASSWORD' onChange={this.handleChange}/>
								</div>
							</li>
							<li>
								<div className='input-field' style={{ float: 'right' }}>
									<button className='btn pink lighten-1 z-depth-1' onClick={this.handleSubmit} ><NavLink style={{color:'white'}} to="/signin">Sign Up</NavLink></button>
								</div>
							</li>

						</form>
					</div>
			
				</ul>
			</div>
		)
	}
}

export default SignUp;