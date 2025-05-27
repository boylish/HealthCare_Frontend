import React from "react";

const Activity = () => {
  return (
    <div className="p-4 h-[35%]  mb-10 ">
      <div className=" flex items-end justify-end pr-2 mb-2">
        <p className="text-blue-800 font-semibold">Details</p>
      </div>
      <div className="bg-blue-50  rounded-2xl h-[150px] md:h-[90%] pl-4 pt-2">
        <div className="flex justify-between pr-5">
          <h2 className="font-bold text-blue-800">Activity</h2>
          <p className="text-sm text-gray-600 font-semibold">
            3 appointments on this week
          </p>
        </div>

        <div className="flex justify-evenly  w-[]  h-[70%] pr-5">
          <div className=" w-fit py-4   ">
            <div className=" h-[90%] flex items-end gap-0.5">
              <div className=" border w-[20%] rounded border-gray-500 h-[100%] bg-gray-500"></div>
              <div className="  w-[20%] rounded border-gray-500 h-[50%] bg-blue-400"></div>
              <div className="  w-[20%] rounded border-gray-500 h-[75%] bg-blue-800"></div>
            </div>

            <p className="">Mon</p>
          </div>
          <div className=" w-fit py-4  ">
            <div className=" h-[90%] flex items-end gap-0.5">
              <div className=" border w-[20%] rounded border-gray-500 h-[100%] bg-gray-500"></div>
              <div className="  w-[20%] rounded border-gray-500 h-[50%] bg-blue-400"></div>
              <div className="  w-[20%] rounded border-gray-500 h-[75%] bg-blue-800"></div>
            </div>

            <p className="">Tue</p>
          </div>
          <div className=" w-fit  py-4  ">
            <div className=" h-[90%] flex items-end gap-0.5">
              <div className=" border w-[20%] rounded border-gray-500 h-[80%] bg-gray-500"></div>
              <div className="  w-[20%] rounded border-gray-500 h-[90%] bg-blue-400"></div>
              <div className="  w-[20%] rounded border-gray-500 h-[40%] bg-blue-800"></div>
            </div>

            <p className="">Wed</p>
          </div>
          <div className=" w-fit py-4  ">
            <div className=" h-[90%] flex items-end gap-0.5">
              <div className=" border w-[20%] rounded border-gray-500 h-[50%] bg-gray-500"></div>
              <div className="  w-[20%] rounded border-gray-500 h-[100%] bg-blue-400"></div>
              <div className="  w-[20%] rounded border-gray-500 h-[75%] bg-blue-800"></div>
            </div>

            <p className="">Thu</p>
          </div>

          <div className=" w-fit py-4  ">
            <div className=" h-[90%] flex items-end gap-0.5">
              <div className=" border w-[20%] rounded border-gray-500 h-[20%] bg-gray-500"></div>
              <div className="  w-[20%] rounded border-gray-500 h-[100%] bg-blue-400"></div>
              <div className="  w-[20%] rounded border-gray-500 h-[75%] bg-blue-800"></div>
            </div>

            <p className="">Fri</p>
          </div>
       
          <div className=" w-fit py-4  ">
            <div className=" h-[90%] flex items-end gap-0.5">
              <div className=" border w-[20%] rounded border-gray-500 h-[20%] bg-gray-500"></div>
              <div className="  w-[20%] rounded border-gray-500 h-[100%] bg-blue-400"></div>
              <div className="  w-[20%] rounded border-gray-500 h-[75%] bg-blue-800"></div>
            </div>

            <p className="">Sat</p>
          </div>
         <div className=" w-fit py-4  ">
            <div className=" h-[90%] flex items-end gap-0.5">
              <div className=" border w-[20%] rounded border-gray-500 h-[100%] bg-gray-500"></div>
              <div className="  w-[20%] rounded border-gray-500 h-[50%] bg-blue-400"></div>
              <div className="  w-[20%] rounded border-gray-500 h-[75%] bg-blue-800"></div>
            </div>

            <p className="">Sun</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
