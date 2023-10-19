import Navbar from "../../components/Navbar/Navbar";
import AsusAd from "./AsusAd";
import AsusProducts from "./AsusProducts";

const Asus = () => {
  return (
    <div>
      <div className="pb-28 lg:pb-0">
        <Navbar></Navbar>
      </div>
      <div>
        <AsusAd></AsusAd>
        <AsusProducts></AsusProducts>
      </div>
    </div>
  );
};

export default Asus;
