import Navbar from "../../components/Navbar/Navbar";
import AppleAd from "./AppleAd";

import AppleProducts from "./AppleProducts";

const Apple = () => {
  return (
    <div>
      <div className="pb-28 lg:pb-0">
        <Navbar></Navbar>
      </div>
      <div>
        <AppleAd></AppleAd>
        <AppleProducts></AppleProducts>
      </div>
    </div>
  );
};

export default Apple;
