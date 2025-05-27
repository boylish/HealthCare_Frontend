import React from "react";
import body from "../../assets/body.png";
import bone from "../../assets/Bone.png";
import teeth from "../../assets/teeth.png";
import lungs from "../../assets/lungs.png";
import { Progress } from "@/components/ui/progress";

const Anatomy = () => {
  return (
    <div className="p-4 flex flex-col   h-fit md:h-fit gap-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <h1 className="text-xl sm:text-2xl font-bold text-blue-800">Dashboard</h1>
        <span className="text-blue-800 text-sm font-semibold">This Week-</span>
      </div>

      <div className="flex  flex-col lg:flex-row gap-4 md:gap-6 flex-grow">
        <div className="bodyfigure bg-blue-50 w-full lg:w-[50%] self-center flex justify-center rounded-2xl h-auto min-h-[200px] md:min-h-[350px]">
          <img src={body} className="h-full max-h-[300px] md:max-h-[350px] object-contain" />
        </div>

        <div className="organs w-full lg:w-[50%] flex flex-col justify-between gap-3 md:gap-4">
          <div className="bg-blue-50 w-full lg:w-[80%] rounded-2xl flex flex-col gap-2 py-3 px-4">
            <div className="flex items-center justify-between gap-4">
              <img src={lungs} className="h-8 md:h-10" />
              <h2 className="font-bold text-blue-800">Lungs</h2>
            </div>
            <p className="text-xs md:text-sm font-bold text-gray-500">Date 26 may</p>
            <Progress value={63} indicatorColor="bg-red-800" className="h-2" />
          </div>
          
          <div className="bg-blue-50 w-full lg:w-[80%] rounded-2xl flex flex-col gap-2 py-3 px-4">
            <div className="flex items-center justify-between gap-4">
              <img src={teeth} className="h-8 md:h-10" />
              <h2 className="font-bold text-blue-800">Teeth</h2>
            </div>
            <p className="text-xs md:text-sm font-bold text-gray-500">Date 26 may</p>
            <Progress value={83} indicatorColor="bg-green-400" className="h-2" />
          </div>
          
          <div className="bg-blue-50 w-full lg:w-[80%] rounded-2xl flex flex-col gap-2 py-3 px-4">
            <div className="flex items-center justify-between gap-4">
              <img src={bone} className="h-8 md:h-10" />
              <h2 className="font-bold text-blue-800">Bone</h2>
            </div>
            <p className="text-xs md:text-sm font-bold text-gray-500">Date 26 may</p>
            <Progress value={43} indicatorColor="bg-orange-400" className="h-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anatomy;