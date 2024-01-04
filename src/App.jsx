import React from 'react'
import "./css/main.css"
import "./index.css"
import Navbar from './Components/navbar'
import Img1 from './Components/img1'
import Img2 from './Components/img2'

function App() {

  return (
    <>
      <Navbar/>
      <div className='flex m-8'>
      <Img1/>
      <Img2/>
      </div>
    </>
  )
}

export default App
