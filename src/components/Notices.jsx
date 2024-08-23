import React from 'react'
import texture2 from "../assets/texture2.jpg"
export default function Notices() {
    const year = new Date().getFullYear()
    return (
      <div className='m-3  shadow-md relative shadow-slate-600 w-full'>
        <img src={texture2} className='absolute object-cover z-0 h-full w-screen ' alt="" />
        <div className='text-white py-2 text-3xl font-semibold flex mx-10 my-4 scale-105 border-b-2 border-white'>{`Notices ${year}-${year%2000+1}`} </div> 
          <div className='h-[400px] relative text-center z-10 flex-grow overflow-y-auto font-bold'>
            <ul className='flex flex-col flex-grow overflow-y-auto'>
              <li className='text-white text-2xl border-2 border-white m-4 p-2'>Deadline Extended for UG course allocation</li>
              <li className='text-white text-2xl border-2 border-white m-4 p-2'>Deadline Extended for UG course allocation</li>
              <li className='text-white text-2xl border-2 border-white m-4 p-2'>Deadline Extended for UG course allocation</li>
              <li className='text-white text-2xl border-2 border-white m-4 p-2'>Deadline Extended for UG course allocation</li>
              <li className='text-white text-2xl border-2 border-white m-4 p-2'>Deadline Extended for UG course allocation</li>
            </ul>
          </div>
      </div>
    )
}
