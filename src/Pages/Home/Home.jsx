import Banner from "../../components/Banner/Banner";
import Brands from "../../components/Brands/Brands";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Technology from "../../components/Technology/Technology";
import Update from "../../components/Update/Update";

const Home = () =>
{
  
  return (
    <div>
      <Navbar />
      <Banner />
      <Brands />
      <Technology />
      <Update></Update>
      <Footer></Footer>
    </div>
  );
};

export default Home;
