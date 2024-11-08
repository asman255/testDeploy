import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginSingup from "./component/LoginSignup/LoginSingup"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LoginSingup />
      <h1 className='text-amber-50 bg-orange-500'>hello</h1>
      <h1 className="text-3xl font-bold underline">
    Hello world! </h1>
    </>
  )
}

export default App
