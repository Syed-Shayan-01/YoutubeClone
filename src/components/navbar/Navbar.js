
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsMic } from "react-icons/bs";
import { PiCameraPlusBold } from "react-icons/pi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="bg-black text-white flex items-center justify-evenly py-2">
          <span className="text-xl px-3 py-3 hover:bg-gray-700  bg-gray-800 mx-5  rounded-full">
            {" "}
            <AiOutlineMenu />
          </span>
          <span className="mr-20">Video Tube</span>
          <div className="flex items-center md:mr-9">
            <input
              type="search"
              name="search"
              id="search"
              className=" bg-gray-900  border-gray-600 w-[40rem] py-2 focus:outline-blue-700 
              rounded-l-3xl"
            />
            <span className="text-xl px-3 py-3 hover:bg-gray-700  bg-gray-800 mx-5  rounded-full">
              <BsMic />
            </span>
          </div>
          <div className=" flex items-center md:mx-20 space-x-6">
            <span className="md:text-2xl ">
              <PiCameraPlusBold />
            </span>
            <span className="md:text-2xl ">
              <IoIosNotificationsOutline />
            </span>
            <span className="md:text-2xl ">
              <MdOutlineAccountCircle />
            </span>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;


