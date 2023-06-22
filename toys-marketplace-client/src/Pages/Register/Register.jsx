import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../../firebase.config";
import useTitle from "../../Hooks/useTitle";

const auth = getAuth(app);

const Register = () => {
  useTitle("Register")
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const {CreateUserWithEmail, googleSignIn} = useContext(AuthContext);

  // email and password sign up function
  const handleSubmit = (e) => {
      e.preventDefault()
      const form = e.target;
      const email = form.email.value;
      const name = form.name.value;
      const password = form.password.value;
      const photo = form.photo.value;

      if(password.length < 6) {
        setError('Password Must be at least six character')
      }



      CreateUserWithEmail(email, password)
      .then(() => {
        setError(' ')
        form.reset()
        navigate('/')
        // update user Profile and Name
       updateProfile(auth.currentUser, {
        displayName: `${name}`, photoURL: `${photo}`
      })
      })
      .catch((error) => {
        const errorCode = error.message;
        setError(errorCode);
        // ..
      });
  }


  // sign in with google

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(() => {
      navigate('/')
    }).catch((error) => {
      setError(error.message)
    });
  }
  return (
    <div className="hero  my-10">
    <div className="card flex-shrink-0 md:w-2/3 shadow-2xl bg-base-100">
    <h1 className="text-2xl font-bold pt-3 text-center">Create an account</h1>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div> 
          <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="photo URL" name="photo" className="input input-bordered"  required/>
        </div>
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          </div>
          </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        
        <div className="form-control mt-6">
          <button onClick={()=> handleGoogleSignIn()} className="btn btn-outline p-2 hidden md:block"> <img className="w-7 me-3 inline-block" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png" alt="" /> Continue with Google</button>

              <button onClick={()=> handleGoogleSignIn()} className="btn btn-outline p-2 md:hidden"> <img className="w-7 me-3 inline-block" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png" alt="" /> </button>
        </div> 
        <p className="text-base mt-3">Already Have an Account? <Link to={'/login'} className="text-blue-600 underline">Login</Link> </p>

         <p className="text-error">{error}</p>
         <div className="form-control mt-6">
          <button className="btn btn-error">Register</button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Register;