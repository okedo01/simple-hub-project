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
    <div></div>
  )
}

export default AdminDashboard