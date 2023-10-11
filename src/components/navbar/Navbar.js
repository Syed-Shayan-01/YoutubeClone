import React, { useRef } from "react";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { BsMic } from "react-icons/bs";
import { PiCameraPlusBold } from "react-icons/pi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import CustomScroll from "react-custom-scroll";
import { items } from '@/utils/items'
import { explore } from '@/utils/items'
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
  function createMarkup(c) {
    return { __html: c };
  }
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
          className="w-60 z-10 h-full overflow-y-auto absolute left-0 top-15 bg-black transform  transition-transform"
        >
          {items.map((item) => {
            return (
              <div
                key={item.id}
                className="flex items-center hover:bg-gray-800 rounded-xl text-white text-[1rem] 
                my-2 mx-2 py-2 px-4 cursor-pointer"
              >
                <div
                  className="text-2xl px-5"
                >{item.icon}</div>
                {item.name}
              </div>
            );
          })}

          {/* Border div */}
          <div className="text-white border-t-[1px] border-gray-500 mb-4" />
          {/* Explore div Element */}
          <div>
            <span className=" text-white text-xl mx-4 mt-4"> Explore</span>
            {explore.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex items-center hover:bg-gray-800 rounded-xl text-white text-[1rem] 
                 my-2 mx-2 py-2 px-4 cursor-pointer"
                >
                  <div
                    className="text-2xl px-5"
                  >{item.icon}</div>
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
