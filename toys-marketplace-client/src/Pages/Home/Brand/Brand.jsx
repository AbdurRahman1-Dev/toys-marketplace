import { FaArrowDown} from "react-icons/fa";
const Brand = () => {
  return (
    <> 
    <h3 className="md:text-2xl font-bold mt-20 mb-5 text-center"> Your Favourite Brand <FaArrowDown className="inline-block"></FaArrowDown> </h3>
    <div className="flex justify-between mb-10">
      <div>
        <img className="opacity-50 hover:opacity-100 duration-200" src="https://demoprestashop.aeipix.com/AX06/mixeat115/shop3/img/m/5.jpg" alt="" />
      </div>
       <div>
        <img className="opacity-50 hover:opacity-100 duration-200" src="https://demoprestashop.aeipix.com/AX06/mixeat115/shop3/img/m/8.jpg" alt="" />
      </div>
      <div>
        <img className="opacity-50 hover:opacity-100 duration-200" src="https://demoprestashop.aeipix.com/AX06/mixeat115/shop3/img/m/3.jpg" alt="" />
      </div> 
    
       <div>
        <img className="opacity-50 hover:opacity-100 duration-200" src="https://demoprestashop.aeipix.com/AX06/mixeat115/shop3/img/m/7.jpg" alt="" />
      </div>
    </div>
    </>
  );
};

export default Brand;