import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Features = () => {

// for react AOS Animation
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <div data-aos=" fade-right" className=" text-3xl font-bold text-center my-20">
        <p className="border-red-600 border-b-4 inline-block">Features</p>
      </div>

    <div data-aos="fade-right" className="w-10/12 mx-auto md:w-full mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
  <div className="card card-side flex-col md:flex-row bg-base-100 items-center shadow-xl">
  <figure><img src="https://demoprestashop.aeipix.com/AX06/mixeat115/shop3/img/p/2/7/4/274-home_default.jpg" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Black Private!</h2>
    <p>There are many variations of passages</p>
    <div className="card-actions">
      <button className="btn btn-outline">Buy Now</button>
    </div>
  </div>
</div>

<div className="card flex-col md:flex-row card-side bg-base-100 items-center shadow-xl">
  <figure><img src="https://demoprestashop.aeipix.com/AX06/mixeat115/shop3/img/p/2/6/8/268-home_default.jpg" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Red Lambo</h2>
    <p>There are many variations of passages</p>
    <div className="card-actions">
      <button className="btn  btn-outline">Buy Now</button>
    </div>
  </div>
</div>

<div className="card card-side flex-col md:flex-row  bg-base-100 items-center shadow-xl">
  <figure><img src="https://demoprestashop.aeipix.com/AX06/mixeat115/shop3/img/p/2/8/8/288-home_default.jpg" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Classic Jeep</h2>
    <p>There are many variations of passages</p>
    <div className="card-actions">
      <button className="btn  btn-outline">Buy Now</button>
    </div>
  </div>
</div>
 </div>
</>
  );
};

export default Features;