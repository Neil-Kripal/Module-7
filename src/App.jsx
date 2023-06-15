import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UseEffectDemo } from './Classwork/UseEffectDemo'
import FetchExample from './Classwork/FetchExample'
import { useTextInput } from './Exercise 1 Hooks/useTextInput'
import Clock from './Exercise 2/Clock'
import CounterComponent from './Exercise 3/Counter'
import BitcoinRates from './Exercise 4/BitcoinRates'
import { MoodProvider } from './Exercise 5/MoodContext'
import Emoji from './Exercise 5/Emoji'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './Exercise 6/Router'
import { Container, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import Posts from './Exercise 7/Frontend/Posts'

function App() {

  const [textInputValue, textInputProps] = useTextInput();
  const [showClock, setShowClock] = useState(false);

  const toggleClock = () => {
    setShowClock(!showClock);
  }
   
  return (
    <>
      <h2>Exercise 1</h2>
      <div>
        <input {...textInputProps} />
      </div>
      <h1>{textInputValue}</h1>
      <h2>Exercise 2</h2>
      <div>
        <button onClick={toggleClock}>{showClock ? "Unmount Clock" : "Mount Clock"}</button>
        {showClock && <Clock/>}
      </div>
      <h2>Exercise 3</h2>
      <CounterComponent></CounterComponent>
      <h2>Exercise 4</h2>
      <BitcoinRates></BitcoinRates>
      <h2>Exercise 5</h2>
      <MoodProvider>
        <Emoji />
        </MoodProvider>
      <h2>Exercise 6</h2>  
      <Router>
      <AppRouter />
    </Router>

    <h2>Exercise 7</h2>
    <Posts></Posts>
      <h2>Classwork</h2>
      <UseEffectDemo /> 
      <FetchExample />
    </>
  );
}

export default App;