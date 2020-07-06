import React from 'react'
import { withRouter } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';

class SigninForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: '',
        }
    }

    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value })

    }
    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value })

    }

    onSubmitSignIn = () => {
        const history = useHistory()
        const location = useLocation()
        fetch('http://localhost:3001/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                USER_EMAIL: this.state.signInEmail,
                USER_PASSWORD: this.state.signInPassword,
            })

        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {  //if statement check if user have an id
                    this.props.loadUser(user)
                    this.props.onSignInChange(true)

                    history.push(location.pathname) //
                }
            })
            .catch(err => console.log(err))
    }

    render() {
        return (

            <ul id="slide-out" className="sidenav" style={{ background:'#FDE4F2', paddingTop:'60px'}}>
                <li><div className="user-view">
                    
                    

                    <h5 className="center show-on-large">Login</h5>
               </div>
               </li>
                <div className="container">
                    <li>
                        <div className="input-field">
                            <input onChange={this.onEmailChange} className='validate' type='email' name='email' id='email' />
                            <label htmlFor='email'>Enter your email</label>
                        </div>
                    </li>

                    <li>
                        <div className="input-field">
                            <input onChange={this.onPasswordChange} className='validate' type='password' name='password' id='password' />
                            <label htmlFor='password'>Enter your password</label>
                        </div>
                    </li>
                    <li>
                        <label style={{ float: 'center' }}>
                            <a className='pink-text center' href='#!'><b>Forgot Password?</b></a>
                        </label>
                    </li>
                    <li>
                        <a type='submit' onClick={this.onSubmitSignIn} name='btn_login' className='btn-large waves-effect indigo'>Login</a>
                    </li>
                </div>
            </ul>
            )
    }	
}

export default withRouter(SigninForm)