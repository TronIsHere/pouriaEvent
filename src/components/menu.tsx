import Image from "next/image";
import { HiOutlineTicket } from "react-icons/hi";
const MenuBar = () => {
  return (
    <div className="flex justify-between">
      <div className="hidden lg:block">
        <Image
          src={"/images/logo2.png"}
          width={200}
          height={100}
          alt={"logo"}
        />
      </div>
      <div className="block lg:hidden">
        <Image
          src={"/images/logo2.png"}
          width={150}
          height={100}
          alt={"logo"}
        />
      </div>
      <div className="mr-40 mt-2">
        <button className="backdrop-blur bg-blurButtonDarker/50 py-3 px-5 rounded-full gButton fixed z-50">
          Get tickets
          <HiOutlineTicket className="inline ml-4" size={20} />
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
