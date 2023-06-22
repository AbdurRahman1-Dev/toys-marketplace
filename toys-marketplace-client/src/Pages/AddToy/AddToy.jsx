import { useForm } from "react-hook-form";
import Banner from "../../Shared/Banner/Banner";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2';
import useTitle from "../../Hooks/useTitle";

const AddToy = () => {
  useTitle("Add Toy")
  const {user} = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = toy => {

    fetch('https://toys-marketplace-server.vercel.app/addtoys', {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(toy)
    })
    .then(res => res.json())
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Toy Added',
        text: 'Your Toy Has been Added!'
      })
    })
    reset();
  };
  return (
    <>
    <Banner title={'Add Toys from here'}></Banner>

    <div className=" text-3xl font-bold text-center mt-20">
        <p className="border-red-600 border-b-4 inline-block">Add toys</p>
      </div>

    <div className="hero my-10">
    <div className="hero-content flex-col w-full md:flex-row gap-5">
      <div className="md:w-1/3 lg:text-left hidden md:block">
        <img className="w-full object-cover h-[700px] overflow-hidden" src="https://images.pexels.com/photos/3801089/pexels-photo-3801089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
     
      <form onSubmit={handleSubmit(onSubmit)} className="card-body shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input 
          type="text" 
          placeholder="name" 
          {...register("name")}
          className="input input-bordered" 
          required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">seller name </span>
          </label>
          <input 
          type="text" 
          defaultValue={user?.displayName}
          placeholder="seller name "
          {...register("sellerName")}
           className="input input-bordered" 
           required />
        </div> 
        <div className="form-control">
          <label className="label">
            <span className="label-text">E-mail </span>
          </label>
          <input 
          type="email" 
          placeholder="email"
          defaultValue={user?.email}
          {...register("email")}
           className="input input-bordered" 
           required />
        </div> 
          <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input 
          type="text" 
          placeholder="Price" 
          {...register("price")}
          className="input input-bordered"  
          required/>
        </div>
           <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input 
          type="text" 
          placeholder="Rating" 
          {...register("rating")}
          className="input input-bordered"  
          required/>
        </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Available quantity</span>
          </label>
          <input 
          type="text" 
          placeholder="Available quantity" 
          {...register("availableQuantity")}
          className="input input-bordered"  
          required/>
        </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input 
          type="text" 
          placeholder="photo URL" 
          {...register("pictureURL")}
          className="input input-bordered"  
          required/>
        </div> 


        <div className="form-control">
        <label className="label">
            <span className="label-text">Category</span>
          </label>
        <select className="bg-transparent input-bordered input " {...register("subCategory")}>
        <option value="Regular">Regular car</option>
        <option value="Sports">Sports car</option>
        <option value="Truck">Truck</option>
        <option value="MiniPolice">Mini police car</option>
        </select>
        </div>


        </div> 

        <div className="w-full mt-3">
          <label className="label">
            <span className="label-text">Detail description</span>
          </label>
          <textarea
          type="text" 
          placeholder="Detail description" 
          {...register("detailDescription")}
          className="textarea textarea-bordered w-full textarea-lg"  
          required/>
        </div>
       
      
         <div className="form-control mt-6">
          <input type="submit" value={'Add Toy'} className="btn btn-error" />
        </div>
      </form>
      </div>
    </div>

  </>
  );
};

export default AddToy;