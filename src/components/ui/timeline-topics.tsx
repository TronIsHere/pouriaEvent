import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const Timeline = ({
  setObserver,
  callback,
}: {
  setObserver: any;
  callback: any;
}) => {
  const [message1, setMessage1] = useState("");
  const [subMessage1, setSubMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [subMessage2, setSubMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [subMessage3, setSubMessage3] = useState("");
  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);

  const someCallback = () => {
    setMessage1("How To Become Top 1% By Pouria Sadeghi");
    setSubMessage1(
      "He talks about how an immigrant can become successful and be a top 1% earner with multiple ways of income"
    );
    callback();
  };

  const someCallback2 = () => {
    setMessage2("How To Create A New Business By Soheil Eghtesadi");
    setSubMessage2(
      "Soheil talks about how he was able to find a product/service and build a successful business around it"
    );
  };

  const someCallback3 = () => {
    setMessage3("How To Stay Mentally Strong By Nima Attar");
    setSubMessage3(
      "Nima Attar talks about how to create a strong mindset and ways to over-come our fears"
    );
    // fireConfetti();
  };

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
  }, []);

  return (
    <>
      <div className="bg-black px-5 py-4 text-white rounded-xl">
        STARTING THE EVENT AT 17:00
      </div>
      <div className="wrapper w-1/4">
        <div id="timeline1" ref={timeline1} className="timeline" />
        <div className="circleWrapper">
          <div id="circle1" ref={circle1} className="circle">
            17:30
          </div>

          <div
            className={cn(
              "message  text-white",
              message1 != "" ? "bg-darkPrimary" : null
            )}
          >
            {message1}{" "}
            <span className="text-sm block pt-2 text-white/85">
              {subMessage1}
            </span>{" "}
          </div>
        </div>
        <div id="timeline2" ref={timeline2} className="timeline" />
        <div className="circleWrapper">
          <div id="circle2" ref={circle2} className="circle">
            18:30
          </div>
          <div
            className={cn(
              "message  text-white",
              message2 != "" ? "bg-darkPrimary" : null
            )}
          >
            {message2}{" "}
            <span className="text-sm block pt-2 text-white/85">
              {subMessage2}
            </span>{" "}
          </div>
        </div>
        <div id="timeline3" ref={timeline3} className="timeline" />
        <div className="circleWrapper">
          <div id="circle3" ref={circle3} className="circle">
            22:00
          </div>
          <div
            className={cn(
              "message  text-white",
              message3 != "" ? "bg-darkPrimary" : null
            )}
          >
            {message3}{" "}
            <span className="text-sm block pt-2 text-white/85">
              {subMessage3}
            </span>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
