import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Gallery = () => {

    // for react AOS Animation
    useEffect(() => {
      Aos.init()
    }, [])


  return (
    <div className="bg-gray-50 lg:p-20 w-10/12 mx-auto md:w-full">
       <div className=" text-3xl font-bold text-center my-20">
        <p className="border-red-600 border-b-4 inline-block">Gallery</p>
      </div>

      <div
       data-aos="flip-right"
        className="grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1 overflow-hidden">
        <div >
          <img className="w-full h-44 md:h-72 object-cover object-center" src="https://images.pexels.com/photos/54278/pexels-photo-54278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
         <div>
          <img className="w-full h-44 md:h-72 object-cover object-center" src="https://images.pexels.com/photos/6018046/pexels-photo-6018046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
         <div>
          <img className="w-full h-44 md:h-72 object-cover object-center" src="https://images.pexels.com/photos/574519/pexels-photo-574519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
         <div>
          <img className="w-full h-44 md:h-72 object-cover object-center" src="https://images.pexels.com/photos/13542573/pexels-photo-13542573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
          <div>
          <img className="w-full h-44 md:h-72 object-cover object-center" src="https://images.pexels.com/photos/2320208/pexels-photo-2320208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div> 
        <div>
          <img className="w-full h-44 md:h-72 object-cover object-center" src="https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div> 
      </div>
      
    </div>
  );
};

export default Gallery;