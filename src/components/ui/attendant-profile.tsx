"use client";
import { cn } from "@/lib/utils";
import { FC, useState } from "react";

interface props {
  name: string;
  title: string;
  customClassWrapper?: string;
  imageSrc: string;
  imageClass?: string;
}

const AttendantProfile: FC<props> = ({
  name,
  title,
  customClassWrapper,
  imageSrc,
  imageClass,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative">
      <div className={cn("flex justify-center", customClassWrapper)}>
        <div className="border-wrap w-[265px]">
          <div
            className="cBorder w-[250px] h-[450px] flex items-end"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={imageSrc}
              alt="attendant picture"
              className={cn(
                "-ml-[75px] w-[400px] h-[400px] absolute grayscale hover:grayscale-0 transition duration-300",
                imageClass
              )}
            />
            {isHovered ? (
              <p className="z-30 px-3 mb-2 ">{title}</p>
            ) : (
              <span className="z-30 gradient-text mb-14 ml-2">{name}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendantProfile;
