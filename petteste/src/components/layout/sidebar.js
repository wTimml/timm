import React from 'react'
import SignInForm from './signin/signInForm'
import SignUp from '../auth/signup'
import M from 'materialize-css'
import Navbar from './navbar'
import SigninForm from './signin/signInForm'

export default class Sidebar extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
            loginRequest:''
        }
    }


    render() {
        document.addEventListener('DOMContentLoaded', function () {
            const elems = document.querySelectorAll('.sidenav');
            const instances = M.Sidenav.init(elems, {
                edge: 'right'
            });

        });


        return (
            <div >

                <Navbar isSignedIn={this.props.isSignedIn} name={this.props.name} onSignInChange={this.props.onSignInChange}/>

                <SigninForm loadUser={this.props.loadUser} onSignInChange={this.props.onSignInChange}/>
                <SignUp loadUser={this.props.loadUser} onSignInChange={this.props.onSignInChange}/>
                

                 </div>
        )
    }
}