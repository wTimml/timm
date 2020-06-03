import React from 'react'

class SignIn extends React.Component {

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



            <div className="" >

                <center>
                    <div class="container">
                        <div class="z-depth-1 grey lighten-4 row" style={{ width: '60vh', display: ' inline - block', padding: '32px 48px 0px 48px', border: '1px solid #EEE' }}>

                            <form class="col s12" method="post">
                                <div class='row'>
                                    <div class='col s12'>
                                    </div>
                                </div>

                                <div class='row'>
                                    <div class='input-field col s12'>
                                        <input onChange={this.onEmailChange} className='validate' type='email' name='email' id='email' />
                                        <label for='email'>Enter your email</label>
                                    </div>
                                </div>

                                <div className='row'>
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

                                    <input style={{ float: 'right' }} href="/signup" type="submit" value="Register"
                                        className='pink-text' >
                                    </input>
                                </center>
                            </form>
                        </div>
                    </div>
                </center>

            </div>

        )
    }
}

export default SignIn