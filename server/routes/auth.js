import express from "express";
import bcrypt from "bcrypt";
import Student from "../models/Student.js";

const router = express.Router();

// ✅ Register route
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ message: "All fields required" });

  const existing = await Student.findOne({ email });
  if (existing) return res.status(409).json({ message: "Email already registered" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const student = await Student.create({
    name,
    email,
    password: hashedPassword
  });

  res.status(201).json({ _id: student._id, name: student.name, email: student.email, feesPaid: student.feesPaid });
});

// ✅ Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const student = await Student.findOne({ email });
  if (!student) return res.status(404).json({ message: "Student not found" });

  const match = await bcrypt.compare(password, student.password);
  if (!match) return res.status(401).json({ message: "Incorrect password" });

  res.json({ _id: student._id, name: student.name, email: student.email, feesPaid: student.feesPaid });
});

export default router;
