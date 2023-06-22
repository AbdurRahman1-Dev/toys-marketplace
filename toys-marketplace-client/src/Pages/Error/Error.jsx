import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError()

  return (
    <div className="w-full h-screen flex justify-center items-center"> 
     <div className="text-center">
      <img className="w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8M83y9WAgLKNtEKrZELn6wCeXJHZp-RubmA&usqp=CAU" alt="" />
     <h1 className="text-9xl font-bold">{error.status}</h1>
      <p className="text-2xl font-semibold">Page {error.statusText}</p>
      <Link className="btn btn-error" to={'/'}>Go to Home Page</Link>
     </div>
    </div>
  );
};

export default Error;