import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
const ContactC = () => {
  return (
    <>
      <div className="w-full rounded-xl bg-darkPrimary h-[250px] mt-60 overflow-hidden flex text-white items-center justify-between">
        <div className="flex flex-col pl-10">
          <p className="text-2xl lg:text-4xl">
            Reserve your spot before it&apos;s too late!
          </p>
          <p className="text-xl mt-5 hidden lg:flex">
            Spaces are Limited — Register Today!
          </p>
        </div>
        <Image src="/images/circle.svg" alt="circle" width={350} height={350} />
      </div>
      <a href="https://www.google.com/maps/place/Centennial+Theatre/@49.3306349,-123.0742297,17z/data=!3m1!4b1!4m6!3m5!1s0x5486703d08604b99:0xa5c879908a5a8f9a!8m2!3d49.3306314!4d-123.0716548!16s%2Fg%2F1tf3b70p?entry=ttu">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
          <Image
            src={"/images/map.png"}
            width={500}
            height={300}
            alt="map"
            className="rounded-xl overflow-hidden cursor-pointer hover:grayscale transition-all duration-500"
          />

          <div className="flex flex-col items-center justify-center text-center">
            <FaLocationDot color="#dc4243" size={60} />
            <p className="text-4xl mt-5">Centennial Theatre, Vancouver</p>
          </div>
        </div>
      </a>
    </>
  );
};

export default ContactC;
