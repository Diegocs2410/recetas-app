import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import { ContextUser } from '../../providers/UserProvider';

export const NavBar = () => {
  // Funcion logout para salir de la aplicacion
  const { login, setLogin } = ContextUser();
  const history = useHistory();
  const logout = () => {
    localStorage.setItem('login', false);
    setLogin(false);
    history.push('/');
  };
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <NavLink className='navbar-brand' to='/'>
          RecetasApp
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          {login && (
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <NavLink
                  className='nav-link'
                  aria-current='page'
                  activeClassName='active'
                  to='/root'
                >
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/' activeClassName='active' onClick={logout}>
                  Salir
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};
