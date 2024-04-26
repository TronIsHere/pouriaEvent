"use client";
import { useState } from "react";
import AttendantProfile from "./ui/attendant-profile";

const Attendants = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold">Who's gonna be there?</h1>
      </div>
      <div className="bg-darkPrimary rounded-3xl w-full mt-10 p-10  grid grid-cols-1 lg:grid-cols-3 justify-center">
        <AttendantProfile
          title="Real Estate Developer
and serial entrepreneur"
          name="Pouria Sadeghi"
          imageSrc="/images/p3.png"
          imageClass="w-[308px] h-[389px] -ml-[30px] mb-10"
        />
        <AttendantProfile
          title="Youtuber/Podcaster and entrepreneur"
          name="Soheil
          Eghtesadi"
          customClassWrapper="pt-10"
          imageSrc="/images/soheil.png"
          imageClass="w-[308px] h-[289px] -ml-[30px] mb-10"
        />
        <div className="mt-10 lg:mt-0">
          <AttendantProfile
            title="Entrepreneur in financial industry"
            name="Nima Attar"
            imageSrc="/images/nima.png"
            imageClass="w-[308px] h-[289px] -ml-[30px] mb-10"
          />
        </div>
        <AttendantProfile
          title="Hairstylist and owner of NY Barbershop"
          name="MJ Nadali"
          imageSrc="/images/mj.png"
          imageClass="w-[308px] h-[289px] -ml-[30px] mb-10"
          customClassWrapper="mt-20"
        />
        <AttendantProfile
          title="Social media manager & food blogger "
          name="Niloufar Tavassoli"
          imageSrc="/images/niloufar.png"
          imageClass="w-[308px] h-[289px] -ml-[30px] mb-10"
          customClassWrapper="mt-20 pt-10"
        />
      </div>
    </div>
  );
};

export default Attendants;
