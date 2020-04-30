import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Rootpage from './Pages/RootPage'
import Home from './Pages/Home'
import NavBar from './Components/NavBar'
import {connect} from 'react-redux'

import DashBoard from './Components/DashBoard'
import StudentControl from './Pages/StudentControl'
import TeacherControl from './Pages/TeacherControl'
import About from './Pages/About'
import StudentAccessUnit from './Pages/StudentAccessUnit'
import Account from './Components/Account'

const App=({hidden,hideAcc})=> {
  return (
    <BrowserRouter>
        <div className="App">
            <NavBar/>
            {
              hidden ? null:<DashBoard/>
            }
            {
              hideAcc ? null :<Account/>
            }
            
            <Switch>
                <Route exact path="/signin" component={Rootpage}/>
                <Route exact path="/" component={Home}/>
                <Route  exact path="/studentControl" component={StudentControl}/>
                <Route  exact path="/teacherControl" component={TeacherControl}/>
                <Route  exact path="/about" component={About}/>
                <Route exact path="/sau" component={StudentAccessUnit}/>
            </Switch>
        </div>
    </BrowserRouter>
  );
}

const mapStateToProps=({dashBoard:{hidden},account:{hideAcc}})=>{
  return{
      hidden,
      hideAcc
  }
}
export default connect(mapStateToProps) (App);
