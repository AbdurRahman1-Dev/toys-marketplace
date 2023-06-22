import { Rating } from '@smastrom/react-rating'
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'



const HomeProductsCard = ({toy}) => {

  const {user} = useContext(AuthContext);
  
  const navigate = useNavigate();

  const {name, pictureURL, price, rating, _id} = toy;

  const handleUserAuthenticate = () => {
    if(user){
      navigate(`/toydetails/${_id}`)
    } else{
      Swal.fire({
        icon: 'error',
        title: 'You have to log in first to view details',
        text: 'Without a login, you can not visit the single toy details page',
        footer: '<a href="">Why do I have this issue?</a>'
      })
      navigate('/login')
    }
  }




  return (
    <div  className="card card-compact hover:-translate-y-2 duration-500 bg-base-100 hover:shadow-2xl h-[400px] md:h-[500px] justify-center">
    <figure><img className=' max-w-[350px] w-full h-full object-cover' src={pictureURL} alt="Toys" /></figure>
    <div className="card-body">
      <h2 className="card-title">{name}</h2>
     <div className="flex justify-between">
     <p className=" font-bold text-xl">${price}</p>
     {rating}/
     <Rating
        style={{ maxWidth: 100 }}
        value={rating}
        readOnly
      />
     </div>
      <div className="card-actions">
      <button onClick={handleUserAuthenticate} className="btn btn-outline w-full">see More</button>
        
      </div>
    </div>
  </div>
  );
};

export default HomeProductsCard;