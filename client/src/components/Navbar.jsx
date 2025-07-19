import { NavLink, useNavigate } from 'react-router-dom';
import {LogOut} from 'lucide-react';

function Navbar({user, setUser}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Optional: if you're using localStorage
    navigate("/login");
  };
  return (
    <nav className="backdrop-blur-md bg-white/10 border-b border-white/20 text-white px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 shadow-lg">
      <div className="text-3xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent font-[Poppins]">
  FeeWise
</div>

      <div className="flex items-center gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-300 underline"
              : "hover:text-cyan-200 transition-colors duration-200"
          }
        >
          All Students
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-300 underline"
              : "hover:text-cyan-200 transition-colors duration-200"
          }
        >
          Profile
        </NavLink>
     
      {user && (
        <button
        onClick={handleLogout}
            className="text-white hover:text-red-400 transition"
            title="Logout">
          <LogOut className='w-5 h-5'/>
        </button>
      )}
       </div>
    </nav>
  );
}

export default Navbar;
