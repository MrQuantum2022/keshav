import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import SideMenu from './SideMenu';
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [menu,setmenu]=useState(false);
  return (
    <>
    
    <div className="flex justify-center gap-5 py-2 bg-amber-600 text-white">
        <span className="cursor-pointer "><a href="https://keshav.du.ac.in/" >NAAC</a></span>
        <span className="cursor-pointer "><a href="https://keshav.du.ac.in/">NIRF</a></span>
        <span className="cursor-pointer "><a href="https://keshav.du.ac.in/">LOGIN</a></span>
        <span className="cursor-pointer "><a href="https://keshav.du.ac.in/">हिंदी</a></span>
        {
          menu?
        <IoMdClose onClick={()=>setmenu(!menu)} className="absolute right-3 text-2xl cursor-pointer"/>:
        <TiThMenu onClick={()=>setmenu(!menu)}  className="absolute right-3 text-2xl cursor-pointer"/>
      }
      </div>
      <SideMenu show={menu} setshow={setmenu}/>
      </>
  )
}
