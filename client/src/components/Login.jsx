import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, { email, password });
      setUser(res.data);
      navigate("/profile");
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
     <h2 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500 bg-clip-text text-transparent mb-6 tracking-tight drop-shadow-[0_2px_6px_rgba(255,255,255,0.2)] text-center">
  Login
</h2>

      <input
  type="email"
  placeholder="Enter email"
  className="border border-white/30 bg-white text-black placeholder-gray-500 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-200"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

<input
  type="password"
  placeholder="Enter password"
  className="border border-white/30 bg-white text-black placeholder-gray-500 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-200 mt-4"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

<button
  className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-4 py-3 w-full rounded-lg mt-6 transition duration-200"
  onClick={handleLogin}
>
  Login
</button>


      <p className="text-center mt-2">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-600 underline">
          Register here
        </Link>
      </p>
    </div>
  );
}

export default Login;
