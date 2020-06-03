import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import SideBar from './components/layout/sidebar';
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import Dashboard from './components/dashboard/dashboard'
import ProjectDetails from './components/project/projectdetails'
import SignIn from './components/auth/signin'
import SignUp from './components/auth/signup'
import CreateProject from './components/project/createproject'
import FranLayout from './components/dashboard/franLayout'
import SearchPage from './components/dashboard/searchPage'
import PetPage from './components/dashboard/petPage'
import PerfilPage from './components/dashboard/perfilPage'
import Perfil_Page from './components/dashboard/Perfil_Page'
import UseParamsTeste from './components/useParamsTeste.jsx';

// ref can only be used on class components
class App extends Component {

    constructor() {
        super()
        this.state = {
            isSignedIn: true,
            user: {
                id: '',
                name: '',
                email: '',
                birthday: '',
                joined: '',
                fName: 'Joseph',
                doados: 5,
                adotados: 1,
                cadastrados: 3
            }
            
            }
    }
    onSignInChange = (bool) => {
        if (bool) {
            this.setState({isSignedIn: true})
        } else {
            this.setState({isSignedIn: false})
        }
    }

    loadUser = (data) => {
        let namehelper= data.name
        let firstName = namehelper.split(' ')[0]
        this.setState({
            user: {
                id: data.id,
                name: data.name,
                email: data.email,
                birthday: data.birthday,
                joined: data.joined,
                fName: firstName
            }
        })
    }

    render() {
        const { fName, doados, adotados, cadastrados } = this.state.user
            
    return (
      <BrowserRouter>
        <div className = 'App'>
                <SideBar isSignedIn={this.state.isSignedIn} name={this.state.user.fName} loadUser={this.loadUser} onSignInChange={this.onSignInChange} />

                <Switch>

                    <Route exact path='/' component={Dashboard} />
                    <Route path='/project/:id' component={ProjectDetails} />
                    <Route path='/signin' render={(props) => <SignIn {...props} loadUser={this.loadUser} onSignInChange={this.onSignInChange}/>} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/create' component={CreateProject} />
                    <Route path='/franLayout' component={FranLayout} />
                    <Route path='/searchPage' component={SearchPage} />
                    <Route path={"/petPage/:id"}  component={PetPage}/>
                    <Route path={"/paramsTeste/:id"}  component={UseParamsTeste}/>
                    <Route path='/petPage' component={PetPage} />
                    <Route path='/perfilPage2' render={(props) => <Perfil_Page {...props} name={fName} doados={doados} adotados={adotados} cadastrados={cadastrados}/>} />


                </Switch>

         <Footer/>
    

        </div>   
      </BrowserRouter>
    )
  }
}

export default App;
