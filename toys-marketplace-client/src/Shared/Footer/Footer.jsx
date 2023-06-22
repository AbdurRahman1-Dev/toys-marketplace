import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-base-200 py-10">
     <footer className="footer items-center w-10/12 mx-auto text-base-content">
  <div>
  <Link to={'/'} className=" normal-case text-xl"><span className="text-red-600 font-bold md:text-4xl">KIDZ</span>car</Link>
    <p>KIDZcar.<br/>Providing reliable tech since 1992</p>
  </div> 
  <div>
    <span className="footer-title">Address & Contact</span> 
       <p className="text-base"><FaMapMarkerAlt className="inline-block text-2xl gap-5 "></FaMapMarkerAlt> 48 Boulevard Jourdan, Paris,
       <span> United States</span>
       </p>
       <p className="text-base"><FaPhoneAlt className="inline-block text-2xl gap-5 "></FaPhoneAlt> 
      +1234567890</p>
      <p className="text-base"><FaEnvelope className="inline-block text-2xl gap-5 "></FaEnvelope> sales@kidzcars.com
</p>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Toys</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
<div className="md:flex  justify-center gap-20 items-center pt-10 w-10/12 mx-auto text-base-content">
<div className="flex md:hidden text-3xl gap-5 mb-3">
  <FaFacebook></FaFacebook>
  <FaLinkedin></FaLinkedin>
  <FaTwitter></FaTwitter>
  </div>
  <div className="items-center">
    <p><span className="text-red-600 font-bold md:text-xl">KIDZ</span>car Copyright © 2023 - All right reserved</p>
  </div> 
  <div className="hidden md:block">
  <div className="flex text-3xl gap-5 mt-3">
  <FaFacebook></FaFacebook>
  <FaLinkedin></FaLinkedin>
  <FaTwitter></FaTwitter>
  </div>
  </div>
</div>
    </div>
  );
};

export default Footer;