import React from 'react'
import "./css/main.css"
import "./index.css"
import Navbar from './Components/navbar'
import Img1 from './Components/img1'
import Img2 from './Components/img2'
import Video from './Components/video'

function App() {

  return (
    <>
      <Navbar/>
      <div className='flex m-8 gap-x-5'>
      <Img1/>
      <Img2/>
      </div>
      <Video/>
    </>
  )
}

export default App
