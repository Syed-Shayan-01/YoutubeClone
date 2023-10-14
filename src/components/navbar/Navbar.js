import React, { useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsMic } from "react-icons/bs";
import { PiCameraPlusBold } from "react-icons/pi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { item } from "@/utils/item";

const Navbar = ({ handleSearch }) => {
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
  if (!item) {
    return <div>Loading</div>;
  }


  return (
    <div>
      <header>
        <nav className="bg-black text-white flex items-center justify-between py-2 px-4 md:px-10">

          <span
            onClick={crtControl}
            className="text-xl  py-3 hover:bg-gray-700 bg-gray-800 rounded-full "
          >
            <AiOutlineMenu />
          </span>

          <span className=" md:mr-8 text-2xl font-bold">Video Tube</span>
          <div className="hidden md:flex items-center mr-4">
            <div className="relative block max-md:hidden">
              <input type="search" id="default-search" className={`block md:w-[20rem] lg:w-[40rem] p-4 pl-10 text-sm
                 text-gray-900 border dark:bg-black border-gray-300 rounded-2xl focus:ring-blue-500
                 focus:outline-blue-500`}
                placeholder="Search" required onChange={e => handleSearch(e.target.value)} />
            </div>
            <span className="text-xl px-3 py-3 hover:bg-gray-700 bg-gray-800 mx-5 rounded-full">
              <BsMic />
            </span>
          </div>

          <div className="flex items-center">

            <span className="text-2xl">

              <PiCameraPlusBold />
            </span>
            <span className="text-2xl mx-4">
              <IoIosNotificationsOutline />
            </span>
            <span className="text-2xl">
              <MdOutlineAccountCircle />
            </span>
          </div>
        </nav>

        {/* Side Bar */}
        <div
          ref={ref}
          className="w-60 md:w-80 z-10 h-full overflow-y-auto absolute left-0 top-15 bg-black transform
          hidden transition-transform"
        >
          {item.slice(0, 9).map((i) => {
            return (
              <div
                key={i.id}
                className="flex items-center hover:bg-gray-800 rounded-xl text-white text-[1rem] 
                  my-2 mx-2 py-2 px-4 cursor-pointer"
              >
                <div
                  className="text-2xl px-5"
                >{i.icon}</div>
                {i.name}
              </div>
            );
          })}

          {/* Border div */}
          <div className="text-white border-t-[1px] border-gray-500 mb-4" />
          {/* Explore div Element */}
          <div>
            <span className=" text-white text-xl mx-4 mt-4"> Explore</span>
            {item.slice(9, 14).map((i) => {
              return (
                <div
                  key={i.id}
                  className="flex items-center hover:bg-gray-800 rounded-xl text-white text-[1rem] 
                  my-2 mx-2 py-2 px-4 cursor-pointer"
                >
                  <div
                    className="text-2xl px-5"
                  >{i.icon}</div>
                  {i.name}
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
