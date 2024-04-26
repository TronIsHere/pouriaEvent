import Attendants from "@/components/attendant";
import HeaderC from "@/components/header";
import MenuBar from "@/components/menu";
import Topics from "@/components/topics";
import { BsMouse } from "react-icons/bs";
const Home = () => {
  return (
    <div className="max-w-[1300px] mx-auto mt-5 relative px-4">
      <MenuBar />
      <HeaderC />
      <div className="flex justify-center mt-16">
        <BsMouse size={30} />
      </div>
      <Attendants />
      <Topics />
      <div className="h-[1300px]"></div>
    </div>
  );
};

export default Home;
