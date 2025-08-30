import Image from "next/image";
import React from "react";
import CameraIcon from "@/icons/CameraIcon";
import { Button } from "@/components/ui/button";
import ThreeDotIcon from "@/icons/ThreeDotIcon";
import Link from "next/link";

function Dashboard() {
  return (
    <div className="px-32 mt-25 mb-10">
      <div>
        <h1 className="text-5xl font-medium">Overview</h1>
        {/* Card Section */}
        <div className="flex items-center gap-5 my-10 ">
          <div className="bg-[#f6f6f6] flex flex-col py-5 px-10 h-32 w-80">
            <div className="flex justify-between items-center gap-30 mb-5">
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
          <div className="bg-[#f6f6f6] flex flex-col py-5 px-10 h-32 w-80">
            <div className="flex justify-between items-center gap-30 mb-5">
              <span>Total Videos</span>
              <span>
                <CameraIcon />
              </span>
            </div>
            <div>
              <span className="font-semibold text-2xl">0/2</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-25">
        <h2 className="text-5xl font-medium">Spaces</h2>
        <Link href="/dashboard/create">
          <Button>Create a new space</Button>
        </Link>
      </div>
      {/* cards showing here  */}
      <div className="grid grid-cols-3 my-10 gap-3">
        {/* single card showing */}
        <div className="flex flex-col bg-[#f6f6f6] py-5 px-10 h-32 w-80">
          <div className="flex justify-between items-center mb-7">
            <div className="flex justify-center items-center gap-2">
              <CameraIcon />
              <span className="font-semibold">Amit Kushwaha</span>
            </div>
            <div>
              <ThreeDotIcon />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span>Video: 0</span>
            <span>Text: 0</span>
          </div>
        </div>
        {/* 2nd */}
        <div className="flex flex-col bg-[#f6f6f6] py-5 px-10 h-32 w-80">
          <div className="flex justify-between items-center mb-7">
            <div className="flex justify-center items-center gap-2">
              <CameraIcon />
              <span className="font-semibold">Amit Kushwaha</span>
            </div>
            <div>
              <ThreeDotIcon />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span>Video: 0</span>
            <span>Text: 0</span>
          </div>
        </div>
        {/* 3rd */}
        <div className="flex flex-col bg-[#f6f6f6] py-5 px-10 h-32 w-80">
          <div className="flex justify-between items-center mb-7">
            <div className="flex justify-center items-center gap-2">
              <CameraIcon />
              <span className="font-semibold">Amit Kushwaha</span>
            </div>
            <div>
              <ThreeDotIcon />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span>Video: 0</span>
            <span>Text: 0</span>
          </div>
        </div>
        {/* 4rth */}
        <div className="flex flex-col bg-[#f6f6f6] py-5 px-10 h-32 w-80">
          <div className="flex justify-between items-center mb-7">
            <div className="flex justify-center items-center gap-2">
              <CameraIcon />
              <span className="font-semibold">Amit Kushwaha</span>
            </div>
            <div>
              <ThreeDotIcon />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span>Video: 0</span>
            <span>Text: 0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
