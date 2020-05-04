import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
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

// ref can only be used on class components
class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <div className = 'App'>
          <Navbar/>

         <Switch>
           <Route exact path='/' component={Dashboard} />
           <Route path='/project/:id' component={ProjectDetails} />
           <Route path ='/signin' component ={SignIn} />
           <Route path ='/signup' component ={SignUp} />
           <Route path ='/create' component ={CreateProject} />
           <Route path ='/franLayout' component={FranLayout}/>
           <Route path ='/searchPage' component={SearchPage}/>
           <Route path ='/petPage' component={PetPage}/>
           <Route path ='/perfilPage' component={PerfilPage}/>
         </Switch>

         <Footer/>
    

        </div>   
      </BrowserRouter>
    )
  }
}

export default App;
