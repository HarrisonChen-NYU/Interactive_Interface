import React, { useState } from 'react';
import './App.css';

function App() {

    return (
      <div className="App">
        <header className="App-header">
          <Interaction />   
        </header>
      </div>
    );

}

function Interaction() {
  const [clicked, setClicked] = useState("");


  function firstClick() {
    setClicked("First Button"
    );
  } 
  function secondClick() { 
    setClicked("Second Button"
    );
  } 
  function thirdClick(){
    setClicked("Third Button"
    );
  } 
return <div>
      <button class = "button" className='buttonOne' onClick={firstClick} >
        First Button
    
      </button>

      <button class = "button" className='buttonTwo' onClick={secondClick}>
        Second Button
      </button>

      <button class = "button" className='buttonThree' onClick={thirdClick}>
        Third Button
      </button>
      <h1> You have selected: {clicked} </h1>

</div>

}


export default App;