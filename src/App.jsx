import React from 'react'
import { useState } from 'react'
import Portfolio from './pages/portfolio'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Portfolio/>
    </>
  )
}

export default App
