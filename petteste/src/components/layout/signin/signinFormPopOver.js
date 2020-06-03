import React from 'react'

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

    render() {
        return (
                <div class="container">
                    <div class="z-depth-1 grey lighten-4 row" >

                    
                            <div class=''>
                                <div class='input-field col s12'>
                                    <input onChange={this.onEmailChange} className='validate' type='email' name='email' id='email' />
                                    <label for='email'>Enter your email</label>
                                </div>
                            </div>

                            <div className=''>
                                <div className='input-field col s12'>
                                    <input onChange={this.onPasswordChange} className='validate' type='password' name='password' id='password' />
                                    <label for='password'>Enter your password</label>
                                </div>
                                <label style={{ float: 'right' }}>
                                    <a className='pink-text' href='#!'><b>Forgot Password?</b></a>
                                </label>
                            </div>

                            <br />

                            <center>
                                <div class='row'>
                                    <a type='submit' onClick={this.onSubmitSignIn} name='btn_login' className='btn-large waves-effect indigo'>Login</a>
                                </div>
                            </center>
                     </div>
                </div>
            )
    }	
}

export default SigninForm