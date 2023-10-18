import Navbar from "../../components/Navbar/Navbar";
import SamsungAd from "./SamsungAd";
import SamsungProducts from "./samsungProducts";

const Samsung = () => {
  return (
    <div>
      <div className="pb-28 lg:pb-0">
        <Navbar></Navbar>
      </div>
      <div>
        <SamsungAd></SamsungAd>
        <SamsungProducts></SamsungProducts>
      </div>
    </div>
  );
};

export default Samsung;
