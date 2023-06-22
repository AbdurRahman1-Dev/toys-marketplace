import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form';


const MyToysTable = ({toy, i, handleDeleteUpdate,setupdateToy,updateToy }) => {


  const {name, price,subCategory,_id, availableQuantity, sellerName,detailDescription } = toy || {};


  const { register, handleSubmit } = useForm();

  const onSubmit = toy => {

    fetch(`https://toys-marketplace-server.vercel.app/updatetoy/${_id}`, {
      method: 'PATCH',
      headers: {"content-type" : "application/json"},
      body: JSON.stringify(toy)
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0) {
        Swal.fire(
          'Updated',
          'Your Toy has been Updated!',
          'success'
        )
        setupdateToy(!updateToy)
      }
    })
    
  };

  const handleDelete = (id) => {
// alert for delete confirmation
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      // delete it after confermation
      if (result.isConfirmed) {      
        fetch(`https://toys-marketplace-server.vercel.app/mytoys/${id}`, {
          method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
        // delete from ui instantly and show a confirmation toast
          if(data.deletedCount > 0) {
            handleDeleteUpdate(id)
            Swal.fire(
              'Deleted!',
              'Your Toy has been deleted.',
              'success'
            )
          }
        })
      }
    })
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
    <td><label htmlFor="my-modal" className="btn btn-success">Update</label></td>
    <td><button onClick={()=> handleDelete(_id)}  className="text-base btn btn-error">Delete</button></td>
  </tr>
   


  <input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">

<div className="modal-action absolute top-0 right-0">
      <label htmlFor="my-modal" className="btn">X</label>
    </div>

       <form onSubmit={handleSubmit(onSubmit)} className="card-body shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      
          <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input 
          type="text" 
          placeholder="Price" 
          {...register("price")}
          defaultValue={price}
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
          defaultValue={availableQuantity}
          className="input input-bordered"  
          required/>
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
          defaultValue={detailDescription}
          className="textarea textarea-bordered w-full textarea-lg"  
          required/>
        </div>
       
         <div className="form-control mt-6">
          <input type="submit" value={'Update Toy'} className="btn btn-success" />
        </div>
      </form>

  </div>
</div>

  </>
  );
};

export default MyToysTable;