import {  useEffect, useState } from "react";
import Banner from "../../Shared/Banner/Banner";
import AllToysTable from "./AllToysTable";
import { FaSearch } from "react-icons/fa";
import useTitle from "../../Hooks/useTitle";
import Aos from "aos";
import 'aos/dist/aos.css'


const AllToys = () => {

      // for react AOS Animation
      useEffect(() => {
        Aos.init()
      }, [])


  useTitle("All Toys")
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState(' ');

  useEffect(()=> {
    fetch('https://toys-marketplace-server.vercel.app/alltoys/all')
    .then(res => res.json())
    .then(data => setToys(data))
  },[]);



  // get search data
  const handlesearch = () => {
    fetch(`https://toys-marketplace-server.vercel.app/searchtoys/${searchText}`)
    .then(res => res.json())
    .then(data =>  setToys(data))
  }

 
  return (
    <div>
      <Banner title={"All Toy's"}></Banner>
      <div className=" text-3xl font-bold text-center my-16">
        <p className="border-red-600 border-b-4 inline-block">All Avaiable toys In This Marketplace</p>
      </div>

{/* search bar */}
<div data-aos="fade-up" className="mt-5 mb-10">   
    <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <FaSearch></FaSearch>
        </div>

        <input onChange={(e) => setSearchText(e.target.value)} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:border-red-600" placeholder="Search by toys nmae" />

        <button onClick={()=> handlesearch()} type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-red-600 hover:btn-outline font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
    </div>
</div>

      
<div data-aos="fade-up" className="my-10 w-11/12 mx-auto md:w-full">
 <div className="overflow-x-auto">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>Seller</th> 
        <th>category</th> 
        <th>Price</th> 
        <th> Quantity</th> 
        <th>View Details</th>
      </tr>
    </thead> 
    <tbody>
      {
        toys?.map((toy, i) => { 
          return <AllToysTable toy={toy} i={i} key={toy._id}></AllToysTable>
        })
      }
    </tbody>
  </table>
</div>    
 </div>
</div>
  );
};

export default AllToys;