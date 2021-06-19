import '../src/styles/App.scss';
import React from 'react';
import Nav from './componentes/nav/nav';
import Conoceme from './componentes/conoceme/conoceme';
import Home from './componentes/home/home';
import Cv from './componentes/cv/cv';
import Contacto from './componentes/contacto/contacto';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  	<Router>
	    <div className="App">         
	    
    <Switch>
          <Route exact path="/conoceme">
            <Conoceme />
          </Route>
          <Route exact path="/cv">
            <Cv />
          </Route>
          <Route exact path="/contacto">
            <Contacto />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        </div>
      </Router>
  );
}

export default App;
