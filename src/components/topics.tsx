"use client";

import { CiCalendarDate } from "react-icons/ci";
import { FaArrowRightLong, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import ReactPlayer from "react-player";
import TimelineObserver from "react-timeline-animation";
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
        <div className="col-span-4 flex justify-center">
          <div className=" pt-10  w-full">
            <div className="border-2 rounded-xl ml-5 overflow-hidden border-primaryRed">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=IoTKbA-tNLM&ab_channel=pouriasadeghi"
                width="100%"
              />
            </div>

            <div className=" mt-10 ml-5">
              <p className="text-lg">
                The event "BizTalk: The Rules of Success" promises an engaging
                and insightful experience as it hosts a series of talks by
                notable speakers Pouria Sadeghi, Soheil Eghtesadi, and Nima
                Attar. Each speaker will explore distinct aspects of personal
                and professional success, tailored to inspire and educate
                attendees.
                <br />
                <br /> Pouria Sadeghi will delve into the dynamics of achieving
                top financial success as an immigrant. His talk, titled "How to
                Become Top 1%," will cover the strategies and mindsets that can
                help one excel financially in a new country. He'll share his
                personal experiences and practical advice on building multiple
                streams of income and navigating the complexities of financial
                growth in a competitive environment.
                <img
                  src="/images/p4.jpg"
                  className="mt-5 rounded-xl pb-10"
                ></img>
                Soheil Eghtesadi's presentation, "How to Create a New Business,"
                will focus on entrepreneurial spirit and innovation. He will
                walk the audience through the journey of identifying a viable
                product or service, conceptualizing a business model, and the
                challenges of scaling a startup into a successful business.
                <br /> Attendees can expect to gain valuable insights into the
                entrepreneurial process from ideation to execution.
                <img
                  src="/images/s2.jpg"
                  className="mt-5 rounded-xl pb-10 overflow-hidden"
                ></img>
                Nima Attar will address the mental and emotional aspects of
                personal development in his talk "How to Stay Mentally Strong."
                His session will emphasize building resilience, overcoming
                fears, and developing a mindset conducive to long-term success.
                <br />
                <br /> Through practical tips and motivational anecdotes, Nima
                aims to equip the audience with tools to strengthen their mental
                health and fortitude. Together, these speakers will provide a
                comprehensive overview of the different facets of achieving and
                maintaining success, making "BizTalk: The Rules of Success" a
                must-attend event for those looking to elevate their
                professional and personal lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topics;
