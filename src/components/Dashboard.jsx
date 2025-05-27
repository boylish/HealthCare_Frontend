import React from "react";
import Anatomy from "./Dashboard/Anatomy";
import Activity from "./Dashboard/Activity";
import Calender from "./Dashboard/Calender";
import UpcomingSchedule from "./Dashboard/UpcomingSchedule";

const Dashboard = () => {
  return (
    <>
      <div className="md:ml-[16vw] bg-white h-[100%]  w-full md:w-[84vw] flex flex-col md:flex-row  ">
        <div className="flex w-[100%] md:w-[50%] flex-col justify-center    md:justify-between  ">
          <Anatomy />
          <Activity />
        </div>
        <div className=" w-[100%] md:w-[50%] flex-col justify-center    md:justify-between h-[87vh]  md:h-[100%]   px-3  bg-blue-50 ">
          <Calender />
          <UpcomingSchedule />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
