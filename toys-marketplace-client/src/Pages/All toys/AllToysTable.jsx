import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";


const AllToysTable = ({toy, i}) => {

const {user} =useContext(AuthContext);
const navigate = useNavigate();
  const {name, price, _id,subCategory, availableQuantity, sellerName } = toy;

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
      <>
      <tr>
     <th>{i + 1}</th> 
    <td className="text-base font-semibold">{name}</td> 
    <td>{sellerName } </td> 
    <td>{subCategory}</td> 
    <td>{price}</td> 
    <td>{availableQuantity}</td> 
    <td><Link onClick={handleUserAuthenticate} className="text-base btn btn-outline" to={`/toydetails/${_id}`}>View Details</Link></td>
  </tr>
      </>
  );
};

export default AllToysTable;