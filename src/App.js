import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Rootpage from './Pages/RootPage'

const App=()=> {
  return (
    <BrowserRouter>
        <div className="App">
            <Rootpage/>
        </div>
    </BrowserRouter>
  );
}

export default App;
