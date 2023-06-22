import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {

  const {user, logout} = useContext(AuthContext);

  // common nav Links
  const navItems = <>
          <li><Link to={'/'}>Home</Link></li>
          {
            user && <>
              <li><Link to={"/mytoys"}>My Toys</Link></li>
              <li><Link to={"/addtoys"}>Add Toys</Link></li>
            </>
          }
           <li><Link to={"/alltoys"}>All Toys</Link></li>
          <li><Link to={"/blogs"}>Blogs</Link></li>
        </>

  return (
    <div className="navbar md:w-10/12 mx-auto py-2 justify-between">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40">
          {navItems}
        </ul>
      </div>
      <Link to={'/'} className="btn hover:bg-inherit btn-ghost normal-case p-0 text-xl"><span className="text-red-600 font-bold md:text-4xl">KIDZ</span>car</Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
          {navItems}
      </ul>
    </div>
    {/* User Profile Image */}
    {
      user && <div className="tooltip tooltip-left" data-tip={`${user?.displayName}`}>
      <div className="avatar">
      <div className="w-12 md:w-14 mx-2 rounded-full">
      <img src={user?.photoURL} />
      </div>
    </div>
 </div>
    }
   
   {
    user ? <button onClick={()=> logout()} className="btn btn-error py-0 w-20 text-xs px-0 ">Log Out</button>  : 
    <Link to={'/login'}><button className="btn btn-error py-0">Login</button></Link>
   }
    
  </div>
  );
};

export default Navbar;