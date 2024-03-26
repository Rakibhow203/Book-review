import { NavLink } from "react-router-dom";

const Header = () => {

  const links = <>
  
        {/* <li><a>Home</a></li>
        <li><a>Listed Books</a></li>
        <li><a>Pages to Read</a></li> */}
    
    <li>
  <NavLink to= "/" className={({ isActive }) =>
                  isActive
                    ? 'text-[#23BE0A] border border-green-400 p-2 rounded font-extrabold'
                    : 'font-bold'
                } >Home</NavLink>
    </li>
    
 <li>
  <NavLink to = "/ListedBooks" className={({ isActive }) =>
                  isActive
                    ? 'text-[#23BE0A]  border border-green-400 p-2 rounded font-extrabold'
                    : 'font-bold'
                } >Listed Books</NavLink>
    </li>
    
<li>
  <NavLink to = "/PagesToRead" className={({ isActive }) =>
                  isActive
                    ? 'text-[#23BE0A] border border-green-400 p-2 rounded font-extrabold'
                    : 'font-bold'
                } >Pages to Read</NavLink>
</li>
  
  </>

  return (

    <div className="max-w-[1280px] mr-auto p-4">
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            
      {links}
            
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   {links}
          
    </ul>
  </div>
  <div className="navbar-end gap-6">
        <a className="btn bg-[#23BE0A] text-white">Sin In</a>
        <a className="btn bg-[#59C6D2] text-white">Sing Up</a>
        
  </div>
      </div>
      </div>
  );
};

export default Header;