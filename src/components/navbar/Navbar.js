import React, { useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsMic } from "react-icons/bs";
import { PiCameraPlusBold } from "react-icons/pi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdCancel, MdOutlineAccountCircle } from "react-icons/md";
import CustomScroll from 'react-custom-scroll';
const Navbar = () => {
  const ref = useRef();
  const crtControl = () => {
    if (ref.current.classList.contains("translate-x-0")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("hidden");
    } else if (!ref.current.classList.contains("translate-x-0")) {
      ref.current.classList.remove("hidden");
      ref.current.classList.add("translate-x-0");
    }
  };
  return (
    <div>
      <header>
        <nav className="bg-black text-white flex items-center justify-evenly py-2">
          <span
            onClick={crtControl}
            className="text-xl px-3 py-3 hover:bg-gray-700  bg-gray-800 mx-5  rounded-full"
          >
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
        {/* Side Bar */}
      
        <div
          ref={ref}
          className="w-96 z-10 h-full overflow-y-auto absolute rounded left-0 top-15 bg-black transform px-7 py-10 
translate-x-0 transition-transform"
        >
          <h2 className="text-xl font-bold text-center">Shopping Cart</h2>
          <span
            onClick={crtControl}
            className="text-lg absolute top-3 right-3 cursor-pointer"
          >
            <MdCancel />
          </span>
          <div className=" text-white mt-6 text-lg font-semibold">
            Your Cart is Empty!
          </div>

          <div className=" text-white mt-6 text-lg font-semibold">
            Your Cart is Empty!
          </div>
          <div className=" text-white mt-6 text-lg font-semibold">
            Your Cart is Empty!
          </div>
          <div className=" text-white mt-6 text-lg font-semibold">
            Your Cart is Empty!
          </div>
          <div className=" text-white mt-6 text-lg font-semibold">
            Your Cart is Empty!
          </div>
          <div className=" text-white mt-6 text-lg font-semibold">
            Your Cart is Empty!
          </div>
          <div className=" text-white mt-6 text-lg font-semibold">
            Your Cart is Empty!
          </div>
          <div className=" text-white mt-6 text-lg font-semibold">
            Your Cart is Empty!
          </div>
          <div className=" text-white mt-6 text-lg font-semibold">
            Your Cart is Empty!
          </div>
          <div className=" text-white mt-6 text-lg font-semibold">
            Your Cart is Empty!
          </div>
          <div className=" text-white mt-6 text-lg font-semibold">
            Your Cart is Empty!
          </div>
          <div className=" text-white mt-6 text-lg font-semibold">
            Your Cart is Empty!
          </div>
          <div className=" text-white mt-6 text-lg font-semibold">
            Your Cart is Empty!
          </div>
          <div className=" text-white mt-6 text-lg font-semibold">
            Your Cart is Empty!
          </div>
          <div className=" text-white mt-6 text-lg font-semibold">
            Your Cart is Empty!
          </div>
          <div className=" text-white mt-6 text-lg font-semibold">
            Your Cart is Empty!
          </div>
          <div className=" text-white mt-6 text-lg font-semibold">
            Your Cart is Empty!
          </div>
          <div className=" text-white mt-6 text-lg font-semibold">
            Your Cart is Empty!
          </div>
          <div className=" text-white mt-6 text-lg font-semibold">
            Your Cart is Empty!
          </div>
       
        </div>
      </header>
    </div>
  );
};

export default Navbar;
