import React from "react";
import HeartIcon from "@/icons/HeartIcon";
import PencialIcon from "@/icons/PencialIcon";
import ThreeDotIcon from "@/icons/ThreeDotIcon";
import { Button } from "./ui/button";
import DeleteIcon from "@/icons/DeleteIcon";

function CreateSpacePage() {
  return (
    <div className="flex mx-3">
      {/* Preview section */}
    <div className="flex flex-col items-center bg-[#f6f6f6] py-10 px-5">
      <h2 className="text-2xl font-medium">Live Preview</h2>
      <div className="border flex flex-col items-center gap-5 my-5 p-4">
        <div>
          <HeartIcon />
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-4xl font-semibold">Header goes here...</span>
          <p>Your custom message goes here...</p>
        </div>
        <div className="my-7">
          <span className="font-semibold text-lg">QUESTIONS</span>
          <ul className="list-disc mx-5">
            <li>Who are you / what are you working on?</li>
            <li>How has [our product / service] helped you?</li>
            <li>What is the best thing about [our product / service]</li>
          </ul>
        </div>
        <div className="w-full">
          <Button className="w-full">
            <PencialIcon />
            Send in text
          </Button>
        </div>
      </div>
    </div>

    {/* Create section */}
    <div className="bg-[#f6f6f6] mx-3 flex flex-col items-center px-5 py-10">
      <h2 className="text-2xl font-medium">Create a new Space</h2>
      <p className="text-center mt-3 max-w-[500px]">
        After the Space is created, it will generate a dedicated page for
        collecting testimonials.
      </p>
      <div className="border flex flex-col items-center gap-5 my-5 p-4 w-full">
        <div className="flex flex-col w-full">
          <label>Space name</label>
          <input
            type="text"
            placeholder="Enter Space name"
            className="border-gray-700 border py-2 pl-4"
          />
        </div>
        <div>
          <input type="file" />
        </div>
        <div className="flex flex-col w-full">
          <label>Header title</label>
          <input
            type="text"
            placeholder="Would you like to give a shoutout for xyz?"
            className="border-gray-700 border py-2 pl-4"
          />
        </div>
        <div className="flex flex-col w-full">
          <label>Your custom message</label>
          <textarea
            placeholder="Write your message"
            className="border-gray-700 border py-2 pl-4 resize-none"
          />
        </div>

        <div className="w-full">
          <span>Questions</span>
          <div className="flex items-center gap-2">
            <ThreeDotIcon />
            <input
              type="text"
              placeholder="Who are you / what are you working on?"
              className="border-gray-700 border py-2 pl-4 w-full"
            />
            <DeleteIcon />
          </div>
          <div className="flex items-center gap-2 my-2">
            <ThreeDotIcon />
            <input
              type="text"
              placeholder="Who are you / what are you working on?"
              className="border-gray-700 border py-2 pl-4 w-full"
            />
            <DeleteIcon />
          </div>
          <div className="flex items-center gap-2">
            <ThreeDotIcon />
            <input
              type="text"
              placeholder="Who are you / what are you working on?"
              className="border-gray-700 border py-2 pl-4 w-full"
            />
            <DeleteIcon />
          </div>
        </div>
        <div className="w-full mt-8">
          <Button className="w-full">Create new Space</Button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default CreateSpacePage;
