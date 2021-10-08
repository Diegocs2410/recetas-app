import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Login } from './components/Login';
import { NavBar } from './components/navbar/NavBar';
import { Root } from './components/Root';
import { ContextUser } from './providers/UserProvider';
function App() {
  const { login } = ContextUser();

  const validar = () => (login ? true : false);
  const Public = (props) => (validar() ? <Redirect to='/root' /> : <Route {...props} />);
  return (
    <Router>
      <NavBar />
      <Switch>
        <Public path='/' exact component={Login} />
        {validar() ? <Route path='/root' component={Root} /> : <Redirect to='/' exact />}
      </Switch>
    </Router>
  );
}

export default App;
