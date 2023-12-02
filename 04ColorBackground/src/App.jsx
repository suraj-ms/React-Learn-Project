import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")



  return (
    <>
      <div className="w-full h-screen" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap bottom-12 justify-center inset-x-0 py-2">
          <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => setcolor("red")} className='p-2 rounded-full text-white' style={{backgroundColor:"red"}}>Red</button>
            <button onClick={() => setcolor("green")} className='p-2 rounded-full text-white' style={{backgroundColor:"green"}}>Green</button>
            <button onClick={() => setcolor("blue")} className='p-2 rounded-full text-white' style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={() => setcolor("yellow")} className='p-2 rounded-full ' style={{backgroundColor:"yellow"}}>Yellow</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
