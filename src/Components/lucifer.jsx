import React from 'react'
import { useState } from 'react'
import Lucifer from '../images/lucifer.png'
import Blush from '../images/luciferblush.png'

export default function lucifer() {

    const [ImageSrc, setImageSrc] = useState(Lucifer)

    const mouseHover = () => {
        setImageSrc(Blush)
    }
    
    const mouseLeave = () => {
        setImageSrc(Lucifer)
    }

  return (

    <>
        <img id='luci' src={ImageSrc} alt='lucifer' onMouseOver={mouseHover} onMouseLeave={mouseLeave} />
    </>
  )
}
