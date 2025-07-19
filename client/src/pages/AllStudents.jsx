import { useEffect, useState } from 'react';
import axios from 'axios';

function AllStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/students`);
      setStudents(res.data);
    } catch (err) {
      console.error('Error fetching students:', err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500 bg-clip-text text-transparent mb-6 tracking-tight drop-shadow-[0_2px_6px_rgba(255,255,255,0.2)]">
  All Students
</h2>

      <table className="min-w-full bg-black/30 backdrop-blur-md text-white shadow-lg rounded-lg overflow-hidden border border-white/10">
        <thead className="bg-gradient-to-r from-blue-500 to-fuchsia-600 text-white">
          <tr>
            <th className="py-3 px-5 text-left text-sm font-semibold border-b border-white/20">Name</th>
            <th className="py-3 px-5 text-left text-sm font-semibold border-b border-white/20">Email</th>
            <th className="py-3 px-5 text-left text-sm font-semibold border-b border-white/20">Fees Paid</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id} className="border-t">
              <td className="py-2 px-4 ">{student.name}</td>
              <td className="py-2 px-4">{student.email}</td>
              <td className="py-2 px-4">
                {student.feesPaid ? (
                  <span className="text-green-600 font-medium">Yes</span>
                ) : (
                  <span className="text-red-600 font-medium">No</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllStudents;
