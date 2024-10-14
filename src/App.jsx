// App.js
import React from 'react';
import './App.css';
import Routes from './router';

function App() {
  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <Routes />
      </div>
    </div>
  );
}

export default App;
