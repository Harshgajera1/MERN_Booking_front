import Featured from "../views/components/Featured";
import FeaturedProperties from "../views/components/FeaturedProperties";
import Footer from "../views/components/Footer";
import Header from "../views/components/Header";
import MailList from "../views/components/MailList";
import Navbar from "../views/components/Navbar";
import PropertyList from "../views/components/PropertyList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
