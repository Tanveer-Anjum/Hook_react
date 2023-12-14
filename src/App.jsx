import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // using hook(useState)

   const [Counter,value] = useState(0)// use any number it not effect your counter no "0"


  //let Counter = 0;

// here we using arrow function for button
  const Btn =()=>{
    //console.log(Counter + 1)

    //Counter = Counter + 1

    value(Counter +1);
   

    //value(Counter)
  }

  
  const Btn2 = ()=>{
  // console.log(Counter -1)

  value(Counter -1);
  }

  


return (
    <>
     <h2>Counter : {Counter}</h2>
     <h3>please click buttons to increse and decrease the value:</h3>

     <button onClick={Btn}>Counter Button</button>
     {'\t'}
   
     <button onClick={Btn2}>Decrese the the value</button>
     
    </>
  )
}

export default App
