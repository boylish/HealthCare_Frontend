import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaBell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import Avatar from "../assets/userAvatar.png";
import { MdAdd } from "react-icons/md";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="md:ml-[16vw] bg-[] h-fit w-full md:w-[84vw] flex flex-col md:flex-row   ">
      <div className="w-full  md:w-[50%]  bg-white p-4">
        <div className="w-[100%]">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Search..."
              className="w-full h-[50px] border pl-10 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-800 hover:text-blue-700 ">
              <FaBell className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-blue-50   w-[100%] md:w-[50%]      flex items-center justify-end gap-5 px-10">
        <div>
          <img src={Avatar} alt="Profile" className="h-12 w-12 rounded-full" />
        </div>
        <div className="border bg-blue-800 text-white p-2 rounded-lg h-11 w-11 text-3xl flex justify-center items-center">
          <MdAdd />
        </div>
      </div>
    </div>
  );
};

export default Header;
