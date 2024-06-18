import React, { MouseEventHandler } from 'react';
import 'bulma/css/bulma.css';
import Button from './components/Button';
import './App.css';

function App() {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    console.log('Button clicked');
  }
  return (
    <div className="App">
      <Button 
        handleClick={handleClick}
      >
        Accionable
      </Button>
    </div>
  );
}

export default App;
