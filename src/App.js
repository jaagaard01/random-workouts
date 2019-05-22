import React from 'react';
import './App.css';
import Data from "./components/Data"
import Random from "./components/Randomizer"

function App() {
  return (
    <div className="App">
      <div className = "App-header">
      <Random> </Random>
     <Data></Data>
     </div>
    </div>
  );
}

export default App;
