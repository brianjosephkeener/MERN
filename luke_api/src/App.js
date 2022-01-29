import './App.css';
import React from "react";
import {
  Switch,
  BrowserRouter,
  Route,
} from "react-router-dom";

import People from './components/People';
import Planet from './components/Planets';
import Search from './components/Search';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Search />
    
      <Switch>
      <Route exact path="/people/:id">
          <People />
        </Route>
      <Route exact path="/planets/:id">
        <Planet />
      </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
