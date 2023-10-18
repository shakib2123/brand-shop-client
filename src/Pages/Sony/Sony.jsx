import Navbar from "../../components/Navbar/Navbar";
import SonyAd from "./SonyAd";
import SonyProducts from "./SonyProducts";

const Sony = () => {
  return (
    <div>
      <div className="pb-28 lg:pb-0">
        <Navbar></Navbar>
      </div>
      <div>
        <SonyAd></SonyAd>
        <SonyProducts></SonyProducts>
      </div>
    </div>
  );
};

export default Sony;
