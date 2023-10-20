import Navbar from "../../components/Navbar/Navbar";
import IntelAd from "./IntelAd";
import IntelProducts from "./IntelProducts";

const Intel = () => {
  return (
    <div>
    
        <Navbar></Navbar>
 
      <div>
        <IntelAd></IntelAd>
        <div className="alert alert-info max-w-7xl mx-auto mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>For more brands products you can go to the home page.</span>
        </div>
        <IntelProducts></IntelProducts>
      </div>
    </div>
  );
};

export default Intel;
