import React from 'react'
import "./css/main.css"
import "./index.css"
import Navbar from './Components/navbar'
import Img1 from './Components/img1'
import Img2 from './Components/img2'
import Video from './Components/video'
import Lucifer from './Components/lucifer'


function App() {

  return (
      <>
        <Navbar/>
        <div className='flex flex-row'>
          <div>
            <div className='flex flex-row m-8'>
              <Img1/>
              <Img2/>
            </div>
            <div><Video/></div>
          </div>
          <div><Lucifer/></div>
        </div>
      </>
  )
}

export default App
