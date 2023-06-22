
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useTitle from "../../Hooks/useTitle";

const Login = () => {
  useTitle('Login')
  const location = useLocation()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const {signInWithemailPass, googleSignIn} = useContext(AuthContext);

const from = location?.state?.from?.pathname || "/";

  // login with email and passworld
  const handleSignIn =(e) => {
      e.preventDefault();
      const form = e.target;
      const password = form.password.value;
      const email = form.email.value;

    signInWithemailPass(email, password)
    .then(() => {
     form.reset()
     setError(' ')
      navigate(from)
    })
    .catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage)
    });
  }


  // sign up with google

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(() => {
      navigate(from)
    }).catch((error) => {
      setError(error.message)
    });
  }
  return (
     <div className="hero  my-10">
    <div className="card flex-shrink-0 md:w-1/3 shadow-2xl bg-base-100">
    <h1 className="text-2xl font-bold pt-3 text-center">Login Now!</h1>
      <form onSubmit={handleSignIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" name="email" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" name="password" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
            
        <div className="form-control mt-6">
          <button onClick={()=> handleGoogleSignIn()} className="btn btn-outline p-2 hidden md:block"> <img className="w-7 me-3 inline-block" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png" alt="" /> Continue with Google</button>

              <button onClick={()=> handleGoogleSignIn()} className="btn btn-outline p-2 md:hidden"> <img className="w-7 me-3 inline-block" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png" alt="" /> </button>
        </div> 
        <p className="text-base mt-3">New to Kidzcar? <Link to={'/registration'} className="text-blue-600 underline">Create an Account</Link> </p>
        <p className="text-error">{error}</p>
         <div className="form-control mt-6">
          <button className="btn btn-error">Login</button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Login;