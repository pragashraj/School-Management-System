import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Rootpage from './Pages/RootPage'
import Home from './Pages/Home'
import NavBar from './Components/NavBar'


const App=({info})=> {
  return (
    <BrowserRouter>
        <div className="App">
            <NavBar/>
            <Switch>
                <Route exact path="/signin" component={Rootpage}/>
                <Route  path="/" component={Home}/>
            </Switch>
        </div>
    </BrowserRouter>
  );
}


export default App;
