import React from 'react'
import './App.css';
import Navbar from './components/navbar'
import SectionInicio from './components/sectionInicio'
import SectionSobre from './components/sectionSobre';
function App() {
  return (
    <div className="App">
      <div className="header">
        <Navbar />
      </div>
      <div className="inicio">
        <SectionInicio />
      </div>
      <div>
        <SectionSobre />
      </div>
    </div>
  );
}

export default App;
