import React, { useState } from "react";
import logo from "../assets/logokmv.jpg"
import SubMenu from "./SubMenu";
import './fonts.css'
import { IoChevronBackCircle } from "react-icons/io5";

export default function SideMenu({show,setshow}) {
    const [submenu,setSubMenu]=useState(false);
    const [itemName,setItemName]=useState("")
    let menulist=["The College","Administration","Academics","Admissions","Girls Hostel","Students Corner","IQAC","NSS"]
    const setProp=(e)=>{
        console.log(e)
        setSubMenu(true)
        setItemName(e)
    }
  return (
    <div className={`flex flex-col lg:w-full  absolute z-10 lg:top-32  justify-start lg:justify-center items-start lg:items-center text-white bg-red-700 font-bold  p-5 h-screen lg:h-1/4 ${show?"left-0 lg:scale-y-100 ":"-left-full lg:scale-y-0 lg:origin-top lg:left-0 "} duration-300  text-xl`}>
        <div className=" flex justify-center items-center text-center relative ">
            <img className=" h-20" src={logo} alt="" />
        </div>
        <div className="lg:flex lg:gap-5" >

        {menulist.map( items=><div key={items} className=" roboto px-2 lg:py-0 py-2 my-2 duration-150  border-b-2 hover:bg-gradient-to-r from-red-600 to bg-red-700"  onClick={()=>setProp(items)}>{items}</div>)}
        <button className='p-2 relative  bottom-0 text-center lg:left-0 ' 
        onClick={()=>setshow(false)}><IoChevronBackCircle/></button>
        </div>
    <SubMenu showsub={submenu} itemName={itemName} setshow={setSubMenu}/>
      
    </div>
  );
}
