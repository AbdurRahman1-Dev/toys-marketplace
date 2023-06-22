import { Link } from "react-router-dom";

const Banner = () => {
  return (
<div className="hero h-96 w-full md:h-[600px]" style={{ backgroundImage: `url("https://images.pexels.com/photos/574519/pexels-photo-574519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
  <div className="hero-overlay bg-black bg-opacity-40"></div>
  <div className="text-neutral-content w-full ps-10">
    <div className="md:w-3/6">
      <h1 className="mb-5 md:text-6xl text-2xl font-bold">Looking for Crazy Toy's?</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     <Link to={'/alltoys'}> <button className="btn btn-outline text-white hover:bg-red-600">See all Toys</button></Link>
    </div>
  </div>
</div>
  );
};

export default Banner;