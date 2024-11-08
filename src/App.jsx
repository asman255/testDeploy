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
      <h1>hello</h1>

    </>
  )
}

export default App
