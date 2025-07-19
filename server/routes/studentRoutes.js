import express from 'express';
import Student from '../models/Student.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

router.put('/:id', async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(student);
});


export default router;
