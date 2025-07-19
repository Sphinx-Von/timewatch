import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

function Profile({ user, setUser }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const navigate = useNavigate();

  const handleUpdate = async () => {
    const res = await axios.put(`${import.meta.env.VITE_API_URL}/api/students/${user._id}`, {
      name, email
    });
    setUser(res.data); // update local state
    alert("Profile updated");
  };

  const handlePayFees = () => {
    navigate("/pay");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 transition duration-300 ease-in-out transform hover:scale-[1.05] hover:shadow-2xl hover:border-white/40 sm:p-4 md:p-4  text-base sm:text-lg">

      <h2 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500 bg-clip-text text-transparent mb-6 tracking-tight drop-shadow-[0_2px_6px_rgba(255,255,255,0.2)]">
        Profile</h2>
        
      <div className="relative mb-4">
        <UserIcon className="w-5 h-5 text-black absolute left-3 top-3.5 pointer-events-none" />
      <input className="w-full p-3 pl-10 rounded-md bg-white border border-white/20 text-black placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
       value={name} 
       onChange={(e) => setName(e.target.value)}
       placeholder="Name" />
      </div>
    
       <div className="relative mb-4">
        <EnvelopeIcon className="w-5 h-5 text-black absolute left-3 top-3.5 pointer-events-none" />
      <input className="w-full p-3 pl-10 rounded-md bg-white border border-white/20 text-black placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
       value={email} 
       onChange={(e) => setEmail(e.target.value)} 
       placeholder="Email"/>

      </div>
      <button onClick={handleUpdate}
       className="bg-blue-600 hover:bg-blue-700 active:bg-green-800 text-white font-semibold px-4 py-2 rounded-3xl shadow-md transition duration-200 ease-in-out transform hover:scale-105 active:scale-95 mr-4">Update</button>

      <div className="mt-6 p-4 border rounded-xl shadow-sm ">
        <p className="mb-4 text-lg font-medium text-white">Fees Paid: <strong className={user.feesPaid ? "text-green-600" : "text-red-600"}>{user.feesPaid ? "Yes" : "No"}</strong></p>
        {!user.feesPaid && (
          <button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold px-5 py-2 rounded-3xl shadow transition duration-200 transform hover:scale-105 active:scale-95" onClick={handlePayFees}>
            Pay Fees
          </button>
        )}
      </div>
    </div>
  );
}

export default Profile;
