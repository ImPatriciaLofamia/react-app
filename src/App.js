import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [isDisable, setIsDisable] = useState(false)
  return (
    <div className="App">
    <Button disabled={isDisable} color='orange'/>
    <Button onPress={() => setIsDisable(!isDisable)} color='yellow'/>
    </div>
  );
}

export default App;
