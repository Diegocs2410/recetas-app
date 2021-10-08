import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const UserProvider = (props) => {
  const [login, setLogin] = useState(false);

  const value = {
    login,
    setLogin,
  };
  return <UserContext.Provider value={value} {...props} />;
};

const ContextUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      'El contexto no se encuentra dentro del provider, debe elevar el provider para ello'
    );
  }
  return context;
};
export { ContextUser };
export default UserProvider;
