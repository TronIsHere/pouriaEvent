"use client";

import { FaFacebookF } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import TimelineObserver from "react-timeline-animation";
import { cn } from "@/lib/utils";
import Timeline from "./ui/timeline-topics";

const Topics = () => {
  const onCallback = () => {
    console.log("awesome");
  };
  return (
    <>
      <div className="flex justify-center mt-20">
        <h1 className="text-4xl font-bold">What are the topics?</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-6 mt-10">
        <div className="col-span-2  sticky">
          <div className="flex flex-col sticky top-10">
            <p className="text-lg font-bold">9 May | 17:00 - 22:00</p>
            <p className="text-lg pt-10 w-1/2">
              125 Boulevard Charest E, Quebec, QC G1K 3G5
            </p>
            <div className="flex gap-3 pt-6">
              <a href="#">
                <div className="border-2 border-blue-600 cursor-pointer  p-3 rounded-full">
                  <FaFacebookF color="0766ff" size={20} />
                </div>
              </a>
              <a href="#">
                <div className="border-2 border-purple-500 cursor-pointer  p-3 rounded-full">
                  <FiInstagram color="a855f7" size={20} />
                </div>
              </a>
              <a href="#">
                <div className="border-2 border-black cursor-pointer  p-3 rounded-full">
                  <FaXTwitter color="black" size={20} />
                </div>
              </a>
            </div>
            <button className="backdrop-blur bg-blurButtonDarker/50 py-3 w-full lg:w-[230px] mt-10 rounded-full gButton">
              Add to my calendar
              <CiCalendarDate className="inline ml-4" size={20} />
            </button>
            <button className="backdrop-blur  py-3 w-full lg:w-[180px] mt-5 rounded-full gYellowButton">
              I’m registering
              <FaArrowRightLong className="inline ml-4" size={15} />
            </button>

            <div className="flex flex-col mt-10">
              <div className="flex justify-between border-b-2 pb-3 w-full lg:w-3/5 items-center">
                <span className="text-xl font-semibold">Regular Price</span>
                <span className="gradient-text-yellow  text-4xl font-bold">
                  75$
                </span>
              </div>
              <div className="flex justify-between pb-3 pt-3 w-full lg:w-3/5  items-center">
                <span className="text-xl font-semibold">VIP Price</span>
                <span className="gradient-text-yellow  text-4xl font-bold">
                  200$
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4  flex justify-center">
          <div className=" pt-10 ">
            <TimelineObserver
              initialColor="#e5e5e5"
              fillColor="black"
              handleObserve={(setObserver) => (
                <Timeline callback={onCallback} setObserver={setObserver} />
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Topics;
