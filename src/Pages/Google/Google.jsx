import Navbar from "../../components/Navbar/Navbar";
import GoogleAd from "./GoogleAd";
import GoogleProducts from "./GoogleProducts";

const Google = () => {
  return (
    <div>
      <div className="pb-28 lg:pb-0">
        <Navbar></Navbar>
      </div>
      <div>
        <GoogleAd></GoogleAd>
        <GoogleProducts></GoogleProducts>
      </div>
    </div>
  );
};

export default Google;
