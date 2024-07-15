import { useState, useCallback, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import background from '/bg(bg).png'
import './App.css'

function App() {

  const [length, setlength] = useState(10)
  const [numall, setNumall] = useState(false)
  const [charall, setcharall] = useState(false)
  const [genpass, setgenpass] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "qwertyuiopasdfghjklmnbvcxzZXCVBNMLKJHGFDSAQWERTYUIOP"
    if (numall) str += "0123456789"
    if (charall) str += "!@#$%^&*(){[]}?/"

    for (let i = 1; i <= length; i++) {
      let char1 = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char1)
    }
    setgenpass(pass)
  }, [length, numall, charall])

  const copyPassword=useCallback(()=>{
    passref.current?.select();
    // passref.current?.setSelectionRange(0,8);
    window.navigator.clipboard.writeText(genpass)
  },[genpass])


  useEffect(() => { passwordGenerator() }, [length, numall, charall, passwordGenerator])

  const passref=useRef(null)



  return (
    <>
      <div className='outmost'>
      </div>
        <div className='outerdiv'>
          <h1 className='head'>Password Generator</h1>
          <div className='textarea'>
            <input className='input' ref={passref} readOnly type="text" placeholder='Password' value={genpass} />
            <button onClick={copyPassword} className='btn1'>Copy</button>
          </div>

          <div className='textarea1'>

            <spam><input className='input1' type="number" placeholder='Password Length' min={8} max={100} value={length} onChange={(e) => { setlength(e.target.value) }} /></spam>

            <spam><button className='btn2'><input type="checkbox" defaultChecked={numall} onChange={() => { setNumall((prev) => !prev) }} />Number</button></spam>

            <spam><button className='btn2'><input type="checkbox" defaultChecked={charall} onChange={() => { setcharall((prev) => !prev) }} />Character</button></spam>

            <spam><button className='btn2' onClick={passwordGenerator}>Generate</button></spam>
          </div>
        </div>
      
    </>
  )
}

export default App
