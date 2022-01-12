import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./components/Styles.css"
import Header from './components/Header';
import AdDesigner from './components/AdDesigner';
import Votes from './components/Votes';

function App() {

  return (
    <div className="App">
      <Header/>
      <AdDesigner/>
      <Votes/>
    </div>
  );
}

export default App;
