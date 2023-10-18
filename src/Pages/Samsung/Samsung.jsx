import Navbar from "../../components/Navbar/Navbar";
import SamsungAd from "./SamsungAd";
import SamsungProducts from "./samsungProducts";

const Samsung = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <SamsungAd></SamsungAd>
        <SamsungProducts></SamsungProducts>
      </div>
    </div>
  );
};

export default Samsung;
