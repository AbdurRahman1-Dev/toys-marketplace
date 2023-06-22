import { useEffect, useState } from "react";
import HomeProductsCard from "./HomeProductsCard";
import 'react-tabs/style/react-tabs.css';
import Aos from "aos";
import 'aos/dist/aos.css'

const HomeProducts = () => {
  // for react AOS animation
  useEffect(() => {
    Aos.init()
  }, [])


  const [toys, setToys] = useState([])
  const [catagory, setCatagory] = useState('all');


  useEffect(() => {
    fetch(`https://toys-marketplace-server.vercel.app/alltoys/${catagory}`)
    .then(res => res.json())
    .then(data => setToys(data))
  },[catagory])



  return (
    <div data-aos="fade-bottom" className="my-20 overflow-hidden">
         <div className=" text-3xl font-bold text-center my-20">
        <p className="border-red-600 border-b-4 inline-block">Shop By  Category</p>
      </div>


      <div className="space-x-5 text-center  w-10/12 mx-auto md:w-full grid grid-cols-3">
        <button onClick={() => setCatagory('Regular')} className={`border-4 inline-block md:px-7 md:p-3 p-2 rounded-full border-red-200 md:text-2xl  font-bold text-xs ${catagory === "Regular" && "text-red-600 border-red-600"}`}>
          Regular Car
        </button>
        <button onClick={() => setCatagory('Sports')} className={`border-4 inline-block md:px-7 md:p-3 p-2 rounded-full border-red-200 md:text-2xl  font-bold text-xs ${catagory === "Sports" && "text-red-600 border-red-600"}`}>
          Sports Car
        </button>
        <button onClick={() => setCatagory('Truck')} className={`border-4 inline-block md:px-7 md:p-3 p-02 rounded-full border-red-200 md:text-2xl  font-bold text-xs ${catagory === "Truck" && "text-red-600 border-red-600"}`}>
          Truck
        </button>
      </div> 


      <div data-aos="fade-up" className="w-10/12 mx-auto md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">

     
        {
          toys.slice(0,6).map(toy => {
           
            return <HomeProductsCard key={toy._id} toy={toy}></HomeProductsCard>
          })
        }
      </div>
    </div>
  );
};

export default HomeProducts;