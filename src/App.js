import React from 'react'
import './App.css';
import Navbar from './components/navbar'
import SectionSobre from './components/sectionInicio'
function App() {
  return (
    <div className="App">
      <div className="header">
        <Navbar />
      </div>
      <div className="sobre">
        <SectionSobre />
      </div>
    </div>
  );
}

export default App;
