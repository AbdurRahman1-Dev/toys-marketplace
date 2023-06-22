import useTitle from "../../../Hooks/useTitle";
import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import Features from "../Features/Features";
import Gallery from "../Gallery/Gallery";
import HomeProducts from "../Home Product/HomeProducts";
import Offer from "../Offer/Offer";

const Home = () => {
  useTitle('Home')
  return (
    <>
      <Banner></Banner>
      <Features></Features>
      <HomeProducts></HomeProducts>
      <Offer></Offer>
      <Gallery></Gallery>
      <Brand></Brand>
    </>
  );
};

export default Home;