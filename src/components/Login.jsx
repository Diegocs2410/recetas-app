import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { ContextUser } from '../providers/UserProvider';

export const Login = () => {
  const [userData, setUserData] = useState({ emial: '', password: '' });
  const { setLogin } = ContextUser();
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
      localStorage.setItem('login', true);
      setLogin(true);
      history.push('/root');
    } else {
      localStorage.setItem('login', false);
      setLogin(false);
      alert('correo/password incorrecto, por favor intente nuevamente');
    }
  };
  return (
    <div style={{ overflow: 'hidden' }}>
      <svg
        preserveAspectRatio='none'
        viewBox='0 0 1200 120'
        xmlns='http://www.w3.org/2000/svg'
        style={{ fill: '#F5C6A5', width: '113%', height: 182, transform: 'scaleX(-1)' }}
      >
        <path d='M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z' />
      </svg>
      <div className='container '>
        <div className='row '>
          <div className='col-md-8 col-lg-6 imgLogin order-2 order-md-0 order-lg-0 m-2 mx-auto'></div>
          <div className='col-md-4 m-2 my-md-auto mx-md-auto order-0 '>
            <h2 className='display-3 text-center title-login'>Login</h2>
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
              <button type='submit' className='btn btn-primary form-control my-2'>
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
