import { useState } from 'react'

import Heading from './components/Heading/Heading';
import Footer from './components/Footer/Footer';

import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';

function App() {
  const [count, setCount] = useState(0); 

  const increment = () => setCount((prevCount) => prevCount = count + 1);
  const decrement = () => setCount((prevCount) => prevCount = count - 1)
  return (
    <div>
      <Heading text="Home" />
      <Counter count={count} increment={increment} decrement={decrement} />
      <Footer version="0.0.1"  />
    </div>
  );
}

export default App;
