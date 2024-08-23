import React from "react"; 
import lis from './Quicklist'
import wall from "../assets/wall.jpg"

export default function QuickLinks() {
  
  return (
    <>
      <div className="flex relative flex-col lg:w-1/2 mb-7">
        <div className="flex relative z-10 bg-red-700 justify-center roboto-slab-b   text-white text-2xl ">
          <h1 className="py-2">QUICK LINKS</h1>
        </div>

          <img src={wall} className="absolute z-0  object-contain lg:w-1/2 " alt="" />
          <img src={wall} className="absolute z-0 bottom-0  object-contain lg:w-1/2 " alt="" />
        <div className="grid grid-cols-2  text-black border border-black ">
          
          {lis.map((item) => (
            <div key={item} className=" z-10 scale-90 flex flex-col justify-center items-center p-2 py-4 m-2 border-black gap-2 shadow-md  bg-orange-50 hover:bg-white hover:shadow-md  ">
              {item[0]}
              <h1 className="text-xl  roboto text-center">{item[1]}</h1>
            </div>
          ))}
          
        </div>
      </div>
    </>
  );
}
