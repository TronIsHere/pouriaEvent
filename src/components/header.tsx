import Image from "next/image";
import CountDownTimer from "./ui/count-down-timer";
const HeaderC = () => {
  return (
    <div className="grid grid-cols-2 mt-16">
      <div className="flex flex-col">
        <div className="text-primaryRed flex">
          <div className="flex items-center pr-2">
            <span className="heartbeat"></span>
            <span className="dot"></span>
          </div>
          Vancouver - 2024 May 9th
        </div>
        <div className="text-5xl mt-10 font-bold">
          The Rules of <span className="text-primaryYellow">Success</span>
        </div>
        <div className="mt-5 text-xl">
          <p className="pr-16">
            welcome to an opportunity that could redefine your future! We are
            thrilled to invite you to our exclusive event, "The Rules of
            Success: How to Become Part of the 1%" where the secrets of the
            business elite will unfold right before your eyes.
          </p>
        </div>
        <div className="mt-20">
          <CountDownTimer targetDate="2024-05-09T18:00:00" />
        </div>
      </div>
      <div className="bg-darkPrimary w-screen rounded-l-full pl-24 py-20">
        <Image
          src={"/images/eventBg.png"}
          alt="event bg"
          width={500}
          height={500}
        ></Image>
      </div>
    </div>
  );
};

export default HeaderC;
