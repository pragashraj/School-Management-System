import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Rootpage from './Pages/RootPage'
import Home from './Pages/Home'
import NavBar from './Components/NavBar'
import {connect} from 'react-redux'
import DashBoard from './Components/DashBoard'
import StudentControl from './Pages/StudentControl'
import About from './Pages/About'

const App=({hidden})=> {
  return (
    <BrowserRouter>
        <div className="App">
            <NavBar/>
            {
              hidden ? null:<DashBoard/>
            }
            <Switch>
                <Route exact path="/signin" component={Rootpage}/>
                <Route exact path="/" component={Home}/>
                <Route  exact path="/studentControl" component={StudentControl}/>
                <Route  exact path="/about" component={About}/>
            </Switch>
        </div>
    </BrowserRouter>
  );
}

const mapStateToProps=({dashBoard:{hidden}})=>{
  return{
      hidden
  }
}
export default connect(mapStateToProps) (App);
