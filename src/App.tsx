import React, { useState } from 'react';
import Calci from './calculator';

import './App.css';
import { Counter } from './components';

function App() {
  return (
    <div className="App">
      <Calci/> 
      {/* <Counter/> */}
    </div>
  );
}

export default App;
