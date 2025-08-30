import React from "react";
import SettingIcon from "@/icons/SettingIcon";
import HeartIcon from "@/icons/HeartIcon";
import Image from "next/image";

function Create() {
  const menuItems = [
    {
      icon: <SettingIcon />,
      title: "Basic",
    },
    {
      icon: <HeartIcon />,
      title: "Thank you page",
    },
  ];

  return (
    <div className="flex mt-2">
      {/* sidebar */}
      <div className="h-screen w-56 bg-[#f6f6f6] flex flex-col items-center">
        <div className="my-10">
          <h2 className="text-2xl font-medium">Select</h2>
        </div>
        <div className="flex flex-col gap-3">
          {menuItems.map((item, index) => (
            <div
              className="flex items-center gap-2 hover:bg-[#dadada] px-5 py-2 cursor-pointer"
              key={index}
            >
              {item.icon}
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
      {/* main page */}
      <div className="flex mx-5">
        {/* controller section */}
        <div className="flex flex-col items-center bg-[#f6f6f6] py-10 px-10">
          <h2 className="text-2xl font-medium">Live Preview</h2>
          <div className="border flex flex-col items-center gap-5 my-5 p-4">
            <div>
              <HeartIcon />
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-4xl font-semibold">
                Header goes here...
              </span>
              <p>Your custom message goes here...</p>
            </div>
            <div>
              <span className="font-semibold text-lg">QUESTIONS</span>
              <ul className="list-disc mx-5">
                <li>Who are you / what are you working on?</li>
                <li>How has [our product / service] helped you?</li>
                <li>What is the best thing about [our product / service]</li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
        {/* preview section */}
        <div></div>
      </div>
    </div>
  );
}

export default Create;
