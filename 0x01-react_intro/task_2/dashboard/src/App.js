// task_3/dashboard/src/App.js
import React from 'react';
import './App.css';
import Notifications from './Notifications';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>&copy; 2020 Holberton School</p>
      </div>
      <Notifications />
    </div>
  );
}

export default App;
