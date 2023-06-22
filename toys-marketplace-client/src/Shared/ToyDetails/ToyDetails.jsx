import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import { useEffect, useState } from "react";
import HomeProductsCard from "../../Pages/Home/Home Product/HomeProductsCard";
import { FaCar } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import useTitle from "../../Hooks/useTitle";

const ToyDetails = () => {
  useTitle("Toy Details")
  const toy = useLoaderData()
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch('https://toys-marketplace-server.vercel.app/alltoys/all')
    .then(res => res.json())
    .then(data => setToys(data))
  },[])

 
  const {name, pictureURL, price, rating,  availableQuantity, detailDescription, subCategory, email, sellerName} = toy || {};
  return (
    <div>
      <Banner title={'Single Toy details'} info={toy.name}></Banner>


      <div className="md:flex items-center justify-center gap-5 mt-20 w-10/12 mx-auto md:w-full">
        <div className="border lg:w-1/3 rounded-md">
          <img className="w-full object-cover" src={pictureURL} alt="" />
        </div>
        <div className="lg:w-1/2 space-y-2">
          <p className="text-xl text-slate-600 font-semibold">
          {subCategory}
            <FaCar className="inline-block ms-2 text-red-600"></FaCar>
            </p>
          <h3 className="text-3xl font-bold">{name}</h3>
          <p className="text-2xl text-red-600 font-bold py-2">${price}</p>
          <p className="text-base font-semibold text-gray-600">{detailDescription?.slice(0,130)}...</p>
          <p className="text-xl">Avaiable: <span className="textre text-gray-800 font-semibold">{availableQuantity}</span></p>

            <div className="py-3">
              <input type="number" className="input input-bordered w-32 me-3" defaultValue={1} />
            <button className="btn btn-warning">Add to Cart</button>
            </div>

          <p className="text-base">Seller: <span className="textre text-gray-800 font-semibold">{email}</span></p>
          <p className="text-base">E-mail: <span className="textre text-gray-800 font-semibold">{sellerName}</span></p>
          <div className="flex my-3">
        <Rating
        style={{ maxWidth: 150 }}
        value={rating}
        readOnly
      />
      /{rating}
     </div>
        </div>
      </div>

      {/* product description */}
  <div className="w-11/12 mx-auto md:w-full">
      <div className=" text-3xl font-bold text-center my-20">
        <p className="border-red-600 border-b-4 inline-block">About This product!</p>
      </div>
      <Tabs className='text-center text-xl font-semibold text-gray-800'>
    <TabList>
      <Tab>Description</Tab>
      <Tab>Title 2</Tab>
    </TabList>
    <TabPanel className='text-base'>
      <h2>{detailDescription}</h2>
    </TabPanel>
    <TabPanel>
      <h2>Product</h2>
      </TabPanel>
    </Tabs>
</div>

{/* features section */}
  <div className="w-11/12 mx-auto md:w-full">
      <div className="my-20">
         <div className=" text-3xl font-bold  my-20">
        <p className="border-red-600 border-b-4 inline-block">You May Also Like this</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          toys.slice(0,3).map(toy => {
           
            return <HomeProductsCard key={toy._id} toy={toy}></HomeProductsCard>
          })
        }
      </div>
      </div>

      </div>
    </div>
  );
};

export default ToyDetails;