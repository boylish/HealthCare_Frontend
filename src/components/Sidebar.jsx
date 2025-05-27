import React from "react";
import { MdSpaceDashboard, MdClose, MdMenu } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { ImStatsBars } from "react-icons/im";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { IoSettings } from "react-icons/io5";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <div className="md:hidden  fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-white bg-blue-700 p-3 rounded-full hover:text-blue-600"
        >
          {sidebarOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
        </button>
      </div>
      <div
        className={`bg-blue-50 fixed top-0 left-0 h-screen w-[70vw] sm:w-[25vw] md:w-[16vw] p-4  border-gray-200 
          transition-all duration-300 ease-in-out z-40
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
      >
        <div className="h-[50px]  text-center">
          <h2 className="text-[#07ebfb] font-bold text-3xl">
            Health<span className="text-blue-800 font-bold text-xl">care.</span>
          </h2>
        </div>

        <div className="h-[85%] mt-10 flex flex-col justify-between items-center">
          <div className="w-[70%] h-[70%] flex flex-col justify-between">
            <div className="flex flex-col gap-6 text-start">
              <span className="text-gray-500 text-sm font-semibold">General</span>
              <div className="font-semibold flex flex-col items-start gap-5">
                <button className="flex items-center gap-2 text-md text-blue-900 transition-colors   ">
                  <MdSpaceDashboard className="text-xl" />
                  Dashboard
                </button>
                <button className="flex items-center gap-2 text-md text-gray-500 hover:text-blue-600 transition-colors">
                  <FaHistory className="text-xl" />
                  History
                </button>
                <button className="flex items-center gap-2 text-md text-gray-500 hover:text-blue-900 transition-colors">
                  <FaCalendarAlt className="text-xl" />
                  Calendar
                </button>
                <button className="flex items-center gap-2 text-md text-gray-500 hover:text-blue-900 transition-colors">
                  <IoMdAddCircle className="text-xl" />
                  Appointments
                </button>
                <button className="flex items-center gap-2 text-md text-gray-500 hover:text-blue-900 transition-colors">
                  <ImStatsBars className="text-xl" />
                  Statistics
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-6 text-start">
              <span className="text-gray-500 text-sm font-semibold">Tools</span>
              <div className="font-semibold flex flex-col items-start gap-5">
                <button className="flex items-center gap-2 text-md text-gray-500 hover:text-blue-900 transition-colors">
                  <IoChatbubbleEllipses className="text-xl" />
                  Chat
                </button>
                <button className="flex items-center gap-2 text-md text-gray-500 hover:text-blue-900 transition-colors">
                  <IoIosCall className="text-xl" />
                  Support
                </button>
              </div>
            </div>
          </div>

          <div className="w-[70%]">
            <button className="text-gray-500 flex gap-2 items-center hover:text-blue-900 transition-colors">
              <IoSettings className="text-xl" />
              Settings
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
