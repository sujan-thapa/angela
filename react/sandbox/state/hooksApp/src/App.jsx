import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  setInterval(updateTime, 1000)
  const now = new Date();
  const formattedTime = now.toLocaleTimeString();
  // console.log(`Current Time: ${formattedTime}`);

  let currentTime = new Date

  // const [count, setCount] = useState(0)
  // const [time, setTime] = useState(new Date().toLocaleTimeString())
  const [time, setTime] = useState(formattedTime)



  // function increase(){
  //   setCount(count + 1)
  // }
  // function decrease(){
  //   setCount(count - 1)
  // }

  function updateTime() {
    const now = new Date();
    const newTime = now.toLocaleTimeString();
    // setTime(formattedTime)
    // setTime(new Date().toLocaleTimeString()) // Update time state
    setTime(newTime) // Update time state


  }

  return (
    <>
      <div>
        <h1>{time}</h1>
        {/* <button onClick={increase} >+</button>
        <button onClick={decrease} >-</button> */}
        <button onClick={updateTime}>Get Time</button>

      </div>
    </>
  )
}

export default App
