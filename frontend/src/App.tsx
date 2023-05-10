import React, { useContext } from 'react';
import { UserContext } from './components/UserContext';
import LoginPage from './components/LoginPage';


const App: React.FC = () => {

  const user = useContext(UserContext);

  return (
    <div>
        {user?.loggedIn === true ? "logged in" : <LoginPage />}
    </div>
  );

};

export default App;

