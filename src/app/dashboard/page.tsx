import Image from "next/image";
import React from "react";
import CameraIcon from "@/icons/CameraIcon";

function Dashboard() {
  return (
    <div className="px-32 mt-25">
      <div>
        <h1 className="text-5xl font-medium">Overview</h1>
        {/* Card Section */}
        <div className="flex items-center gap-5 my-10">
          <div className="bg-[#f6f6f6] flex flex-col py-5 px-10">
            <div className="flex justify-between items-center">
              <span>Total Videos</span>
              <span>
                <CameraIcon />
              </span>
            </div>
            <div>
              <span className="font-semibold text-2xl">0/2</span>
            </div>
          </div>

          {/* 2nd card */}
          <div className="bg-[#f6f6f6] flex flex-col py-5 px-10">
            <div className="flex justify-between items-center">
              <span>Total Videos</span>
              <CameraIcon />
            </div>
            <div>
              <span className="font-semibold text-2xl">0/2</span>
            </div>
          </div>
        </div>
      </div>
      <div>{/* spaces and create button */}</div>
      <div>{/* how manny card created here show them */}</div>
    </div>
  );
}

export default Dashboard;
