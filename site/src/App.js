import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return (
    <div className="App">
      {code ? <Dashboard code={code} /> : <Login />}
      <p>hi</p>
    </div>
  );
}

export default App;
