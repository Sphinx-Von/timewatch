import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
        name, email, password
      });
      setUser(res.data);
      navigate("/profile");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-3xl font-extrabold bg-gradient-to-r text-center from-cyan-400 via-pink-400 to-purple-500 bg-clip-text text-transparent mb-6 tracking-tight drop-shadow-[0_2px_6px_rgba(255,255,255,0.2)]">Register</h2>

      
  

 
    <input
  className="border border-white/30 bg-white text-black placeholder-gray-500 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-200"
  placeholder="Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

<input
  className="mt-4 border border-white/30 bg-white text-black placeholder-gray-500 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-200"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

<input
  type="password"
  className="mt-4 border border-white/30 bg-white text-black placeholder-gray-500 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-200"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

<button
  className="mt-6 w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition duration-200"
  onClick={handleRegister}
>
  Register
</button>
<p className="text-center mt-2">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 underline">
          Login here
        </Link>
      </p>


    </div>
  );
}

export default Register;
