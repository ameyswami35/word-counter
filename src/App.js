import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='Gray';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <Header mode={mode} toggleMode={toggleMode} />
    <div className="container mb-3">
      <Textform heading="Enter text to analyse" mode={mode}/>
  </div>
    <About/>
    </>
  );
}

export default App;
