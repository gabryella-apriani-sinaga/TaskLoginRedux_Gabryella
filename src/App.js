// App.js
import React from 'react';


import Login from './Login';
import {useSelector} from 'react-redux';
import Dashboard from './Dashboard';

const App = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <div>
      {isLoggedIn ? <Dashboard /> : <Login />}
    </div>
  );
};

export default App;
