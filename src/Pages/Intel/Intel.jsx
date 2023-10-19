import Navbar from "../../components/Navbar/Navbar";
import IntelAd from "./IntelAd";
import IntelProducts from "./IntelProducts";

const Intel = () => {
  return (
    <div>
      <div className="pb-28 lg:pb-0">
        <Navbar></Navbar>
      </div>
      <div>
        <IntelAd></IntelAd>
        <IntelProducts></IntelProducts>
      </div>
    </div>
  );
};

export default Intel;
