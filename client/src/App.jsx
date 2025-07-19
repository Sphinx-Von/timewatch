import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllStudents from './pages/AllStudents';
import Profile from './pages/Profile';
import Login from './components/Login';
import PayFees from './pages/PayFees';
import Register from './components/Register';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Navbar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<AllStudents />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser}/>}/>
        <Route
          path="/profile"
          element={
            user ? <Profile user={user} setUser={setUser} /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/pay"
          element={
            user ? <PayFees user={user} setUser={setUser} /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
