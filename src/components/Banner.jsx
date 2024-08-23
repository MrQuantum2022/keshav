import React from 'react'
import kmv1 from "../assets/download.jpg"
import kmv2 from "../assets/WhatsApp Image 2024-08-12 at 22.02.11_5edd2aff.jpg"

export default function Banner() {
   
  return (
    <>
    <div className='w-full h-2/3 flex  relative hover:opacity-90'>
        <img src={kmv2} className='w-full h-[400px] object-cover object-center' alt="" />
    <div className='h-full justify-center w-2/5 hidden md:visible right-0  absolute bg-gradient-to-l  from-slate-600  to-transparent flex-col'>
        <h1 className='text-white text-2xl font-bold'>Recent:</h1>
        <p className='text-xs text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi explicabo repellendus, numquam quae nobis saepe similique voluptatibus voluptas perspiciatis sit deserunt, cupiditate repellat expedita eum vitae. Necessitatibus asperiores totam perferendis.</p>
    </div>
    </div>
    
    </>
  )
}
