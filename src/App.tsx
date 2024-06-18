import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import 'bulma/css/bulma.css';
import Button from './components/Button';
import Input from './components/Input';
import './App.css';

function App() {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value);
  }
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    console.log('Button clicked');
  }
  return (
    <div className="App">
      <Input placeholder='Nombre' handleChange={handleChange}/>
      <Button 
        handleClick={handleClick}
      >
        Accionable
      </Button>
    </div>
  );
}

export default App;
