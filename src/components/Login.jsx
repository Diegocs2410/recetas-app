import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { ContextUser } from '../providers/UserProvider';

export const Login = () => {
  const [userData, setUserData] = useState({ emial: '', password: '' });
  const { login, setLogin } = ContextUser();
  // Importamos el hook History
  const history = useHistory();
  // Funcion para guardar los datos de los input
  const handleOnChange = ({ target: { value, name } }) => {
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  // Funcion para manejar el submit
  const hanldeSubmit = (e) => {
    e.preventDefault();
    const { email, password } = userData;
    if (email === 'admin@admin.com' && password === '123') {
      alert('Ingreso exitoso');
      history.push('/root');
    } else {
      alert('correo/password incorrecto, por favor intente nuevamente');
    }
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-8 col-lg-6 imgLogin order-2'></div>
        <div className='col-md-4'>
          <h2 className='display-3 text-center'>Login</h2>
          <form onSubmit={hanldeSubmit}>
            <input
              type='email'
              className='form-control mt-2'
              placeholder='email@email.com'
              name='email'
              value={userData.email}
              onChange={handleOnChange}
            />
            <input
              type='password'
              className='form-control mt-2'
              placeholder='Password'
              name='password'
              value={userData.password}
              onChange={handleOnChange}
            />
            <button type='submit' className='btn btn-primary form-control mt-2'>
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
