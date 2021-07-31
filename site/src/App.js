import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import './css/baseStyles.css';

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return (
    <div className="main_container">
      {code ? <Dashboard code={code} /> : <Login />}
    </div>
  );
}

export default App;
