import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
  return (
    <>
     <Navbar></Navbar> 
      <div className="lg:w-10/12 mx-auto">
      <Outlet></Outlet>
      </div>
     <Footer></Footer>
    </>
  );
};

export default Main;