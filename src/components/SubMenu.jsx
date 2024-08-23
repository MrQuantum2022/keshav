import React from "react";
import "./fonts.css";
import { IoChevronBackCircle } from "react-icons/io5";

export default function SubMenu({ showsub, itemName, setshow }) {
  const College = [
    "Vision and Mission",
    "History",
    "Governing Body",
    "Executive Team",
    "Principal's Desk",
    "Organogram",
    "Infrastructure",
    "Facilities",
    "Wall of Honour",
    "Code of Professional Ethics",
  ];
  const Administration = [
    "Principal Office",
    "Administration",
    "Accounts",
    "Library",
  ];
  const Academics = ["Courses", "Departments", "Faculty"];
  const Admissions = [
    "DU Bulletin",
    "Prospectus- 2024-25",
    "Seat Distribution",
    "GE Options",
    "FAQ",
    "Imp. Committees",
    "list of TIC's and Co-oridinators",
  ];
  const GirlsHostel = [
    "Administration",
    "Prospectus- 2024-25",
    "Admission Procedure and Forms",
    "Infrastructure and Facilities",
    "Mess",
    "Hostel Rules and Regulations",
    "Hostel Life",
  ];
  const StudentsCorner = [
    "Students Societies",
    "Students Union",
    "Cells/Clubs /Committees",
    "Students Forms",
    "Students Enrolment No",
  ];
  const IQAC = [
    "About",
    "Objectives of IQAC",
    "Functions of IQAC",
    "Composition of IQAC",
    "IQAC Minutes & ATR",
    "Best Practices",
    "AQAR Reports",
    "IQAC Calendar 2023-24",
    "Feedbck Analysis",
  ];
  return (
    <>
      <div
        className={`absolute lg:items-center lg:justify-center duration-300 px-5 py-2 my-0   z-20 top-0 ${showsub?"left-0 lg:scale-y-100 ":"-left-full lg:scale-y-0 lg:origin-top lg:left-0 "} flex flex-col h-[105%] lg:h-42 lg:top-[95%] w-full text-white bg-red-600 lg:bg-transparent  `}
      >
        <div className=" text-2xl roboto-slab-b text-center   ">
          {itemName}
        </div>

        <div className="lg:flex lg:gap-5 lg:flex-wrap  lg:items-center relative h-screen  lg:h-auto lg:justify-center">
          {College.map((items) => (
            <div
              key={items}
              className={` duration-150 roboto py-2 my-1 lg:py-0 lg:my-0 border-b-2 hover:bg-gradient-to- from-red-600 to bg-red-600 lg:bg-transparent  ${
                itemName === "The College" ? "visible" : "hidden"
              } `}
            >
              {items}
            </div>
          ))}
          {Administration.map((items) => (
            <div
              key={items}
              className={` duration-150 roboto py-2 my-1 lg:py-0 lg:my-0 border-b-2 hover:bg-gradient-to- from-red-600 to bg-red-600 lg:bg-transparent  ${
                itemName === "Administration" ? "visible" : "hidden"
              } `}
            >
              {items}
            </div>
          ))}
          {Academics.map((items) => (
            <div
              key={items}
              className={` duration-150 roboto py-2 my-1 lg:py-0 lg:my-0 border-b-2 hover:bg-gradient-to- from-red-600 to bg-red-600 lg:bg-transparent  ${
                itemName === "Academics" ? "visible" : "hidden"
              } `}
            >
              {items}
            </div>
          ))}
          {Admissions.map((items) => (
            <div
              key={items}
              className={` duration-150 roboto py-2 my-1 lg:py-0 lg:my-0 border-b-2 hover:bg-gradient-to- from-red-600 to bg-red-600 lg:bg-transparent  ${
                itemName === "Admissions" ? "visible" : "hidden"
              } `}
            >
              {items}
            </div>
          ))}
          {GirlsHostel.map((items) => (
            <div
              key={items}
              className={` duration-150 roboto py-2 my-1 lg:py-0 lg:my-0 border-b-2 hover:bg-gradient-to- from-red-600 to bg-red-600 lg:bg-transparent  ${
                itemName === "Girls Hostel" ? "visible" : "hidden"
              } `}
            >
              {items}
            </div>
          ))}
          {StudentsCorner.map((items) => (
            <div
              key={items}
              className={` duration-150 roboto py-2 my-1 lg:py-0 lg:my-0 border-b-2 hover:bg-gradient-to- from-red-600 to bg-red-600 lg:bg-transparent  ${
                itemName === "Students Corner" ? "visible" : "hidden"
              } `}
            >
              {items}
            </div>
          ))}
          {IQAC.map((items) => (
            <div
              key={items}
              className={` duration-150 roboto py-2 my-1 lg:py-0 lg:my-0 border-b-2 hover:bg-gradient-to- from-red-600 to bg-red-600 lg:bg-transparent  ${
                itemName === "IQAC" ? "visible" : "hidden"
              } `}
            >
              {items}
            </div>
          ))}
        <button
          className="p-2  absolute lg:static  w-26 text-center  lg:bottom-1  right-0 lg:right-0"
          onClick={() => setshow(false)}
        >
          <IoChevronBackCircle/>
        </button>
        </div>
      </div>
    </>
  );
}
