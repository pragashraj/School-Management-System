import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Rootpage from './Pages/RootPage'
import Home from './Pages/Home'

const App=()=> {
  return (
    <BrowserRouter>
        <div className="App">
            <Switch>
                <Route exact path="/" component={Rootpage}/>
                <Route  path="/home" component={Home}/>
            </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
