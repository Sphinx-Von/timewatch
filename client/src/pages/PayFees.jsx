import axios from "axios";
import { useNavigate } from "react-router-dom";

function PayFees({ user, setUser }) {
  const navigate = useNavigate();

  const handlePayment = async () => {
    const res = await axios.put(`${import.meta.env.VITE_API_URL}/api/students/${user._id}`, {
      feesPaid: true
    });
    setUser(res.data);
    alert("Payment successful!");
    navigate("/profile");
  };

  return (
   <div className="p-6 max-w-md mx-auto">
  <h2 className="text-3xl font-extrabold bg-gradient-to-r text-center from-cyan-400 via-pink-400 to-purple-500 bg-clip-text text-transparent mb-6 tracking-tight drop-shadow-[0_2px_6px_rgba(255,255,255,0.2)]">
    Simulated Payment
  </h2>

  <p className="border border-white/30 bg-white text-black p-3 w-full rounded-lg mb-4">
    <span className="font-semibold">Name:</span> {user.name}
  </p>

  <p className="border border-white/30 bg-white text-black p-3 w-full rounded-lg mb-4">
    <span className="font-semibold">Email:</span> {user.email}
  </p>

  <button
    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition duration-200"
    onClick={handlePayment}
  >
    Pay Now
  </button>
</div>

  );
}

export default PayFees;
