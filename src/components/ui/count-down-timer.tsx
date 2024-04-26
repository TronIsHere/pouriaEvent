"use client";

import React, { useState, useEffect } from "react";

// Define a type for the component props
type CountDownTimerProps = {
  targetDate: string;
};

// Define a type for the time left structure
type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const CountDownTimer: React.FC<CountDownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft | {} => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft | {} = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | {}>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const hasTimeLeft = Object.keys(timeLeft).length > 0;

  return (
    <div className="flex text-xl flex-wrap justify-center lg:justify-start lg:text-3xl">
      {hasTimeLeft && (
        <>
          <div className="flex flex-col items-center border-r-[1.5px] pr-6 border-black/15">
            <span>{(timeLeft as TimeLeft).days}</span>
            <span>Days</span>
          </div>
          <div className="flex flex-col items-center border-r-[1.5px] px-6 border-black/15">
            <span>{(timeLeft as TimeLeft).hours}</span>
            <span>Hours</span>
          </div>
          <div className="flex flex-col items-center border-r-[1.5px] px-6 border-black/15">
            <span>{(timeLeft as TimeLeft).minutes}</span>
            <span>Minutes</span>
          </div>
          <div className="flex flex-col items-center pl-6 lg:pr-6 mt-5 lg:mt-0 border-black/15">
            <span>{(timeLeft as TimeLeft).seconds}</span>
            <span>Seconds</span>
          </div>
        </>
      )}
    </div>
  );
};

export default CountDownTimer;
