import React from "react";
import { BiSolidArrowToLeft, BiSolidArrowToRight } from "react-icons/bi";
import Teeth from "../../assets/teeth.png";
import Biceps from "../../assets/Biceps.png";

const Calender = () => {
  return (
    <div className="h-[50%] w-[100%] md:w-[100%] self-center  flex flex-col justify-evenly text-[12px] sm:text-[14px] md:text-base px-4">
      <div className="flex flex-col gap-1">
        <div className="flex justify-between pr-0 sm:pr-5">
          <h2 className="font-semibold text-blue-900 text-sm sm:text-base">October 2021</h2>
          <div className="flex text-xl sm:text-2xl text-blue-900">
            <BiSolidArrowToLeft />
            <BiSolidArrowToRight />
          </div>
        </div>

        <div className="pr-0 sm:pr-5">
          <div className="flex justify-between m-1 sm:m-2 h-[90%] text-blue-900 gap-[5px] sm:gap-2">
            <div className="flex flex-col items-center justify-evenly font-semibold p-1 sm:p-2 w-[14%]">
              <p className="text-xs sm:text-sm">Mon</p>
              <p className="text-sm sm:text-lg font-bold">25</p>
              <p className="text-xs sm:text-sm">10:00</p>
              <p className="text-xs sm:text-sm">11:00</p>
              <p className="text-xs sm:text-sm">12:00</p>
            </div>
            <div className="bg-blue-200 rounded-lg flex flex-col items-center justify-evenly font-semibold p-1 sm:p-2 w-[14%]">
              <p className="text-xs sm:text-sm">Tue</p>
              <p className="text-sm sm:text-lg font-bold">25</p>
              <p className="text-xs sm:text-sm">08:00</p>
              <p className="text-xs sm:text-sm bg-blue-800 text-white px-1 sm:px-2 py-0.5 rounded-lg">
                09:00
              </p>
              <p className="text-xs sm:text-sm">10:00</p>
            </div>
            <div className="flex flex-col items-center justify-evenly font-semibold p-1 sm:p-2 w-[14%]">
              <p className="text-xs sm:text-sm">Wed</p>
              <p className="text-sm sm:text-lg font-bold">25</p>
              <p className="text-xs sm:text-sm">12:00</p>
              <p className="text-xs sm:text-sm">--</p>
              <p className="text-xs sm:text-sm">13:00</p>
            </div>
            <div className="flex flex-col items-center justify-evenly font-semibold p-1 sm:p-2 w-[14%]">
              <p className="text-xs sm:text-sm">Thu</p>
              <p className="text-sm sm:text-lg font-bold">25</p>
              <p className="text-xs sm:text-sm">10:00</p>
              <p className="text-xs sm:text-sm bg-blue-600 opacity-60 text-white px-1 sm:px-2 py-0.5 rounded-lg">
                11:00
              </p>
              <p className="text-xs sm:text-sm">--</p>
            </div>
            <div className="flex flex-col items-center justify-evenly font-semibold p-1 sm:p-2 w-[14%]">
              <p className="text-xs sm:text-sm">Fri</p>
              <p className="text-sm sm:text-lg font-bold">25</p>
              <p className="text-xs sm:text-sm">--</p>
              <p className="text-xs sm:text-sm">14:00</p>
              <p className="text-xs sm:text-sm">16:00</p>
            </div>
            <div className="flex flex-col items-center justify-evenly font-semibold p-1 sm:p-2 w-[14%]">
              <p className="text-xs sm:text-sm">Sat</p>
              <p className="text-sm sm:text-lg font-bold">25</p>
              <p className="text-xs sm:text-sm bg-blue-600 opacity-60 text-white px-1 sm:px-2 py-0.5 rounded-lg">
                12:00
              </p>
              <p className="text-xs sm:text-sm">14:00</p>
              <p className="text-xs sm:text-sm">15:00</p>
            </div>
            <div className="flex flex-col items-center justify-evenly font-semibold p-1 sm:p-2 w-[14%] opacity-60">
              <p className="text-xs sm:text-sm">Sun</p>
              <p className="text-sm sm:text-lg font-bold">25</p>
              <p className="text-xs sm:text-sm bg-blue-600 opacity-60 text-white px-1 sm:px-2 py-0.5 rounded-lg">
                09:00
              </p>
              <p className="text-xs sm:text-sm">10:00</p>
              <p className="text-xs sm:text-sm">11:00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[25%] flex gap-2 sm:gap-4 justify-between pr-0 sm:pr-5 text-[10px] sm:text-[12px]">
        <div className="bg-blue-700 h-full w-[35%] rounded-xl text-white p-2 sm:p-4  flex flex-col justify-center font-semibold ">
          <div className="flex justify-between items-center">
            <h3 className="text-[15px]">Dentist</h3>
            <img src={Teeth} className="h-5 sm:h-8" />
          </div>
          <p>09:00-11:00</p>
          <p>Dr. Cameron</p>
        </div>
        <div className="bg-blue-200 h-full w-[65%] flex flex-col justify-center  rounded-xl text-blue-900 font-semibold p-2 sm:p-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-[15px]">Physiotherapy Appointment</h3>
            <img src={Biceps} className="h-5 sm:h-8" />
          </div>
          <p>11:00-12:00</p>
          <p>Dr. Kevin</p>
        </div>
      </div>
    </div>
  );
};

export default Calender;
