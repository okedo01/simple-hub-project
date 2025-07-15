import React, { useEffect, useState } from 'react'
import { getItem, setItem } from '../../lib/localStorage';
import type { Students } from '../../lib/Types';

const AdminDashboard: React.FC = () => {
  const [ students, setStudents ] = useState<Students[]>([]);
  useEffect(() => {
    const saved = getItem<Students[]>("students") ?? [];
    setStudents(saved);
  }, []);

  const handleDelete = (index: number) => {
    const updated = students.filter((_, i) => i !== index);
    setItem("students", updated);
    setStudents(updated);
  }

  return (
    <div>
      <h1>All Registered Students</h1>
      { students.map((student, index) => (
         <div key={index} className="p-4 border-b flex justify-between">
          <div>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Course:</strong> {student.courseTitle}</p>
            <p><strong>Progress:</strong> {student.progress}%</p>
          </div>
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