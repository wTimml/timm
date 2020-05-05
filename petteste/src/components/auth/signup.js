import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser} from '../../store/actions/userActions'


class SignUp extends Component {


	state = {
		userId: '',
		userBirthday: '',
		userEmail: '',
		userPassword:'',
		userName:'',
		userLastName:''

}

handleChange =(e) => {
	this.setState({
		[e.target.id]: e.target.value
	})
}

handleSubmit =(e) => {
	e.preventDefault();
	console.log(this.state)
	//this.props.createUser(this.state)
}
	render() {
		
		return (

			<div className='container'>
				<form  onSubmit={this.handleSubmit} className='white'>
					<h5 className='grey-text text-darken-3'>Sign Up</h5>

					<div className='input-field'>
						<label htmlFor='USER_NAME'>First Name</label>
						<input type ='text' id='USER_NAME' onChange={this.handleChange}/>
					</div>

					<div className='input-field'>
						<label htmlFor='USER_LASTNAME'>Last Name</label>
						<input type ='text' id='USER_LASTNAME' onChange={this.handleChange}/>
					</div>

					<div className='input-field'>
						<label htmlFor='USER_EMAIL'>Email</label>
						<input type ='email' id='USER_EMAIL' onChange={this.handleChange}/>
					</div>
					<div className='input-field'>
						<label htmlFor='USER_BIRTHDAY'>Email</label>
						<input type='date' id='USER_BIRTHDAY' onChange={this.handleChange} />
					</div>

					<div className='input-field'>
						<label htmlFor='USER_PASSWORD'>Password</label>
						<input type ='password' id='USER_PASSWORD' onChange={this.handleChange}/>
					</div>

					<div className='input-field'>
						<button className='btn pink lighten-1 z-depth-1'>Sign Up</button>
					</div>

				</form>
			</div>
		)
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		createUser: (users) => dispatch(createUser(users))
    }
}

export default connect(null, mapDispatchToProps)(SignUp);