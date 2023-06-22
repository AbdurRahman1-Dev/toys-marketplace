import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Banner from "../../Shared/Banner/Banner";
import MyToysTable from "./MyToysTable";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import useTitle from "../../Hooks/useTitle";
import Aos from "aos";
import 'aos/dist/aos.css'

const MyToys = () => {

    // for react AOS Animation
    useEffect(() => {
      Aos.init()
    }, [])

  const {user} = useContext(AuthContext);
  useTitle("My Toy")
  const [myToys, setMyToys] = useState([]);
  const [updateToy, setupdateToy] = useState(false);
  const [sortbyPrice, useShortByPrice] = useState(1)

  useEffect(()=>{
    fetch(`https://toys-marketplace-server.vercel.app/mytoys?email=${user?.email}&sort=${sortbyPrice}`)
    .then(res => res.json())
    .then(data => setMyToys(data))
  },[user, updateToy, sortbyPrice]);


  const handleDeleteUpdate = (id) => {
    const remainToys = myToys.filter(toys => toys._id !== id)
    setMyToys(remainToys)
  }

  return (
    <div className="">
    <Banner title={"My Toy's"}></Banner>

    <div className=" text-3xl font-bold text-center my-16">
      <p className="border-red-600 border-b-4 inline-block">Your Added Toys</p>
    </div>

   <div data-aos="fade-up" className="flex justify-center">
   <div className="border px-5 py-2 max-w-fit">
      <p className="text-2xl">Price <FaArrowUp onClick={()=> useShortByPrice(1)} className={`inline-block ${sortbyPrice === 1 && "text-red-600"}`}></FaArrowUp> <FaArrowDown onClick={()=> useShortByPrice(-1)} className={`inline-block ${sortbyPrice === -1 && "text-red-600"}`}></FaArrowDown> </p>
    </div>
   </div>
    <div  className="my-10 w-11/12 mx-auto md:w-full">
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
      <th>Update</th>
      <th>Delete</th>
    </tr>
  </thead> 
  <tbody>
    {
      myToys.map((toy, i) => { 
      return <MyToysTable handleDeleteUpdate={handleDeleteUpdate } toy={toy} i={i} setupdateToy={setupdateToy} updateToy={updateToy} key={toy._id}></MyToysTable>
      })
    }
  </tbody>
</table>
</div>    
</div>
</div>
  );
};

export default MyToys;