import Navbar from "../../components/Navbar/Navbar";
import AppleAd from "./AppleAd";

import AppleProducts from "./AppleProducts";

const Apple = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <AppleAd></AppleAd>
        <AppleProducts></AppleProducts>
      </div>
    </div>
  );
};

export default Apple;
