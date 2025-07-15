import React, { useEffect, useState } from 'react'
import { getItem, setItem } from '../../lib/localStorage';
import type { Students } from '../../lib/Types';

const AdminDashboard: React.FC = () => {
  const [students, setStudents] = useState<Students[]>([]);

  useEffect(() => {
    const saved = getItem<Students[]>("students") ?? [];
    setStudents(saved);
  }, []);

  const handleDelete = (index: number) => {
    const deleted = students.filter((_, i) => i !== index);
    setItem("students", deleted);
    setStudents(deleted);
  }

  const handleAdd = () => {
    const newStudent: Students = {
      id: 0,
      name: "",
      email: "",
      password: "",
      course: "",
      courseID: 0,
      progress: 0,
      courseTitle: "",
    };
    const added = [...students, newStudent];
    setItem("students", added);
    setStudents(added);
  }

  return (
    <div>
      <h1 className="text-2xl ">All Registered Students</h1>
      <button
        onClick={handleAdd}
        className="bg-gray-500 text-white px-3 py-1 rounded"
      >
        Add
      </button>
      {students.map((student, index) => (
        <div key={index} className="p-4 border-b flex justify-between">
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Course:</strong> {student.courseTitle}</p>
          <p><strong>Progress:</strong> {student.progress}%</p>
          <button
            className="bg-gray-500 text-white px-3 py-1 rounded"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(index)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default AdminDashboard