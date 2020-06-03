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

    onSubmitSignIn = () => {
        const { history } = this.props

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
                    history.push('/franLayout')
                }
            })
            .catch(err => console.log(err))
    }

    render() {
        return (



            <div className="" >

                <center>
                    <div className="container">
                        <div className="z-depth-2 white  row" style={{width: '60vh', display: ' inline - block', padding: '32px 48px 0px 48px', border: '1px solid #EEE' }}>

                            <form className="col s12" method="post">

                                <div className=''>
                                    <div className='input-field col s12'>
                                        <input onChange={this.onEmailChange} className='validate' type='email' name='email' id='email' />
                                        <label for='email'>Enter your email</label>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='input-field col s12 '>
                                        <input onChange={this.onPasswordChange} className='validate' type='password' name='password' id='password' />
                                        <label for='password'>Enter your password</label>
                                    </div>
                                    <label style={{ float: 'right' }}>
                                        <a className='pink-text' href='#!'><b>Esqueceu sua senha?</b></a>
                                    </label>
                                </div>

                                <br />
                                <center>
                                    <div className=''>
                                        <a type='submit' onClick={this.onSubmitSignIn} name='btn_login' className='btn-large waves-effect indigo'>Login</a>
                                    </div>

                                    <label style={{ float: 'center' }}>
                                        <a href="/signup" type="submit" className='pink-text' ><b>Registrar</b></a>
                                    </label>
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