import React from 'react'
import image2 from '../images/hellogo.jpg'
import linker from '../images/link-simple.svg'

export default function img2() {
  return (
    <div className="relative w-[330px] h-[270px] bg-[#ff7878] rounded-[10px] shadow-[2px_4px_6px_#0000000d] hover:shadow-[0px_0px_2px_2px_#E1E1E1]">
            <img className="absolute w-[330px] h-[194px] top-0 left-0 object-cover" alt="Image" src={image2} />
            <a href="https://helltaker.fandom.com/wiki/Helltaker_Wiki"><img className="absolute w-[35px] h-[35px] top-[210px] left-[28px]" alt="Link simple" src={linker} /></a>
            <div className="absolute w-[211px] top-[198px] left-[86px] [font-family:'Acme-Regular',Helvetica] font-normal text-[#4f1a1a] text-[48px] tracking-[0] leading-[normal] whitespace-nowrap">
                Fandom
            </div>
        </div>
  )
}


