import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from './components/Login';
import { NavBar } from './components/navbar/NavBar';
import { Root } from './components/Root';
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/root' exact component={Root} />
      </Switch>
    </Router>
  );
}

export default App;
