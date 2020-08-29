import React from 'react';

/* COMPONENTS */

import {LoginForm} from '../src/components/login'

/* REACT ROUTER */

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { useHistory } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/"><LoginForm/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
