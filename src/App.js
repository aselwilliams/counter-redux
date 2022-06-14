import { useState } from 'react';
import './App.css';
import store from './store';
import * as actions from './actions';

function App() {
  const [state,setState]=useState('')

  const handleIncrement=()=>{
    setState(!state)
    store.dispatch({
     type: actions.increment
    })
  }
  const handleDecrement=()=>{
    setState(!state)
      store.dispatch({
     type: actions.decrement
    })
  }
  const handleReset=()=>{
    setState(!state)
    store.dispatch({
     type: actions.reset
    })
  }
  return (
    <div className="App">
     <h1>Counter</h1>
     <h1>{store.getState()}</h1>
     <div className='btn-box'>
       <button onClick={handleIncrement}>+</button>
       <button onClick={handleDecrement}>-</button>
       <button onClick={handleReset}>reset</button>
     </div>
    </div>
  );
}

export default App;
