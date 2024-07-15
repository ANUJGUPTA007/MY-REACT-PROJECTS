import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import Btn from './Btn'

function App() {
  const [color, setColor] = useState('#B9FF45')


  return (
      <div className='flex flex-wrap-reverse justify-center h-screen w-screen ' style={{backgroundColor:color}}>
        <div className=' flex flex-row justify-center pt-2 border-2 border-white rounded-full bg-white w-auto h-16 mb-12'>
            <div className=''>
              <button onClick={()=>setColor("black")} className='rounded-full mx-2 bg-black'>Black</button>
            </div>

            <div className=''>
              <button onClick={()=>setColor("red")} className='rounded-full mx-2 bg-red-600'>Red</button>
            </div>

            <div className=''>
              <button onClick={()=>setColor("pink")} className='rounded-full mx-2 bg-pink-300 text-black'>Pink</button>
            </div>

            <div className=''>
              <button onClick={()=>setColor("yellow")} className='rounded-full mx-2 bg-yellow-300 text-black'>Yellow</button>
            </div>

            <div className=''>
              <button onClick={()=>setColor("rgb(147 197 253)")} className='rounded-full mx-2 bg-blue-300 text-black'>Blue</button>
            </div>

            <div className=''>
              <button onClick={()=>setColor("rgb(134 239 172)")} className='rounded-full mx-2 bg-green-300 text-black'>Green</button>
            </div>

            <div className=''>
              <button onClick={()=>setColor("rgb(253 186 116)")} className='rounded-full mx-2 bg-orange-300 text-black'>Orange</button>
            </div>
        </div>
        
      </div>
  )
}

export default App
