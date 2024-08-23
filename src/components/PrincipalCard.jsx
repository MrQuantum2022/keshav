import React from "react";
import logo from "../assets/logokmv.jpg";
import "./fonts.css";

export default function PrincipalCard() {
  return (
    <div className="bg-slate-100 shadow-sm my-3  shadow-slate-700 scale-90  h-[500px] overflow-x-hidden">
      <div className=" h-1/3 flex justify-center items-end bg-teal-600 gap-5 ">
        <img
          className="h-80 w-80 absolute -mb-24 z-0 opacity-30 -right-24 "
          src={logo}
          alt=""
        />
        <img
          className="rounded-[750px] shadow-sm shadow-slate-700  border-4 border-white absolute z-10 left-9 -mb-20 h-48 w-48 object-cover  "
          src="https://keshav.du.ac.in/img/Principal.jpg"
          alt=""
        />
      </div>
      <div className="flex h-2/3 relative justify-center items-center ">
        <h1 className="text-2xl scale-105 text-center absolute top-3 right-5 font-bold roboto-slab-b">
          Principal's <br />
          Desk
        </h1>
        <p className="roboto p-5 text-sm">
          Keshav Mahavidyalaya is an institution that has always believed in
          excellence through continuous learning by doing. We strive to create
          leaders of tomorrow by giving shape and providing direction to the
          aspirations and dreams of the young minds who step into this temple of
          learning. The NAAC accreditation of grade ‘A’ for the institution is a
          testimony to the fact sky is not the limit for us in the pursuit of
          excellence.
        </p>
        <div className="absolute bottom-3 left-5">
            <h1 className="text-2xl roboto">Prof. Madhu Pruthi <br /><span className="text-xl">Principal</span></h1>
        </div>
        <a href="Navbar.jsx"><h1 className="absolute bottom-3 right-3 ">Read more</h1></a>
      </div>
    </div>
  );
}
