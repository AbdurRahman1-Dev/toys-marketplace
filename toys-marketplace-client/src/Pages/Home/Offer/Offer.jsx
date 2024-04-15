import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Offer = () => {

  // for react AOS Animation
  useEffect(() => {
    Aos.init()
  }, [])


  return (
    <div 
    data-aos="zoom-in" 
    className=" hero h-72  object-left  duration-300 " style={{ backgroundImage: `url("https://demoprestashop.aeipix.com/AX06/mixeat115/shop3/modules/aei_cmsbanner/views/img/banner1.jpg")` }}>
  <div className="hero-overlay md:bg-opacity-20 bg-opacity-50"></div>
  <div className="w-full md:flex justify-end hero-content text-neutral-content">
    <div className="me-0 md:w-2/5">
      <h3 className="mb-5 text-2xl md:text-3xl font-bold text-white md:text-black">
Buy Kids Ride On Cars</h3>
      <p className="mb-5 md:text-gray-900 text-white ">Get 25% Off On First Order And Also Get Gift Voucher</p>
      <button className="btn btn-outline text-white md:text-black">Shop Now</button>
    </div>
  </div>
</div>
  );
};

export default Offer;