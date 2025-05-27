import React from "react";
import Eye from "../../assets/Eye.png";
import Heart from "../../assets/heart.png";
import Syringe from "../../assets/syringe.png";
import Doctor from "../../assets/Doctor.png";

const UpcomingSchedule = () => {
  return (
    <div className="w-[100%] md:w-[100%] h-[50%]  flex flex-col text-blue-900 text-sm sm:text-base px-4">
      <h1 className="text-sm sm:text-xl font-bold h-[10%]">
        The Upcoming Schedule
      </h1>
      <div className="mr-2 sm:mr-4 h-[45%]">
        <h2 className="font-semibold text-gray-500 text-xs sm:text-sm">
          On Thursday
        </h2>
        <div className="mt-1 sm:mt-2 flex justify-between h-[80%] gap-1 sm:gap-2">
          <div className="h-[70%] w-[55%] p-2 flex flex-col gap-2  bg-blue-200 rounded-lg">
            <div className="flex gap-1 h-[50%] font-semibold justify-between items-center">
              <h4 className="text-xs sm:text-sm font-bold">
                Health checkup complete
              </h4>
              <img src={Syringe} className="h-4 sm:h-6" />
            </div>
            <p className="font-semibold text-xs sm:text-sm">11:00 AM</p>
          </div>

          <div className="h-[70%] w-[40%] p-2 flex flex-col gap-2  bg-blue-200 rounded-lg">
            <div className="flex h-[50%] font-semibold justify-between items-center">
              <h4 className="text-xs sm:text-sm font-bold">Ophthalmologist</h4>
              <img src={Eye} className="h-3 sm:h-4" />
            </div>
            <p className="font-semibold text-xs sm:text-sm">14:00 PM</p>
          </div>
        </div>
      </div>
      <div className="h-[45%] mr-2 sm:mr-4 ">
        <h2 className="font-semibold text-gray-500 text-xs sm:text-sm">
          On Saturday
        </h2>
        <div className="h-[75%] flex mt-1 sm:mt-2 justify-between gap-1 sm:gap-4 w-full sm:w-[80%]">
          <div className="h-[70%] w-[50%] p-2 bg-blue-200 font-semibold rounded-lg">
            <div className="flex h-[50%] justify-between items-center">
              <h4 className="text-xs sm:text-sm font-bold">Cardiologist</h4>
              <img src={Heart} className="h-4 sm:h-[20px]" />
            </div>
            <p className="text-xs sm:text-sm">12:00 AM</p>
          </div>

          <div className="h-[70%] w-[50%] p-2 bg-blue-200 font-semibold rounded-lg">
            <div className="flex h-[50%] justify-between items-center">
              <h4 className="text-xs sm:text-sm font-bold">Neurologist</h4>
              <img src={Doctor} className="h-5 sm:h-[25px]" />
            </div>
            <p className="text-xs sm:text-sm">11:00 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
