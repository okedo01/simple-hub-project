// import React, { useEffect, useState } from 'react';
// import { getItem, setItem } from '../../lib/localStorage';
// import type { Students } from '../../lib/Types';

// const AdminDashboard: React.FC = () => {
//   const [students, setStudents] = useState<Students[]>([]);
//   const [editIndex, setEditIndex] = useState<number | null>(null);
//   const [editData, setEditData] = useState<Partial<Students>>({});

//   useEffect(() => {
//     const saved = getItem<Students[]>("students") ?? [];
//     setStudents(saved);
//   }, []);

//   const handleDelete = (index: number) => {
//     const deleted = students.filter((_, i) => i !== index);
//     setItem("students", deleted);
//     setStudents(deleted);
//   };

//   const handleAdd = () => {
//     const newStudent: Students = {
//       id: Date.now(),
//       name: "",
//       email: "",
//       password: "",
//       course: "",
//       courseID: 0,
//       progress: 0,
//       courseTitle: "",
//     };
//     const added = [...students, newStudent];
//     setItem("students", added);
//     setStudents(added);
//   };

//   const handleEditClick = (index: number) => {
//     setEditIndex(index);
//     setEditData(students[index]);
//   };

//   const handleEditChange = (field: keyof Students, value: string | number) => {
//     setEditData(prev => ({ ...prev, [field]: value }));
//   };

//   const handleSave = () => {
//     if (editIndex === null || !editData) return;

//     const updated = [...students];
//     updated[editIndex] = { ...updated[editIndex], ...editData } as Students;

//     setItem("students", updated);
//     setStudents(updated);
//     setEditIndex(null);
//     setEditData({});
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl mb-4">All Registered Students</h1>

//       <button
//         onClick={handleAdd}
//         className="bg-gray-600 text-white px-4 py-2 mb-4 rounded"
//       >
//         Add Student
//       </button>

//       {students.map((student, index) => (
//         <div key={index} className="p-4 border-b space-y-2">
//           {editIndex === index ? (
//             <>
//               <input
//                 type="text"
//                 value={editData.name || ""}
//                 onChange={(e) => handleEditChange("name", e.target.value)}
//                 placeholder="Name"
//                 className="border px-2 py-1 w-full"
//               />
//               <input
//                 type="email"
//                 value={editData.email || ""}
//                 onChange={(e) => handleEditChange("email", e.target.value)}
//                 placeholder="Email"
//                 className="border px-2 py-1 w-full"
//               />
//               <input
//                 type="text"
//                 value={editData.courseTitle || ""}
//                 onChange={(e) => handleEditChange("courseTitle", e.target.value)}
//                 placeholder="Course Title"
//                 className="border px-2 py-1 w-full"
//               />
//               <input
//                 type="number"
//                 value={editData.progress ?? 0}
//                 onChange={(e) => handleEditChange("progress", Number(e.target.value))}
//                 placeholder="Progress"
//                 className="border px-2 py-1 w-full"
//               />
//               <div className="flex gap-2">
//                 <button
//                   onClick={handleSave}
//                   className="bg-green-600 text-white px-3 py-1 rounded"
//                 >
//                   Save
//                 </button>
//                 <button
//                   onClick={() => setEditIndex(null)}
//                   className="bg-gray-400 text-white px-3 py-1 rounded"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </>
//           ) : (
//             <>
//               <p><strong>Name:</strong> {student.name}</p>
//               <p><strong>Email:</strong> {student.email}</p>
//               <p><strong>Course:</strong> {student.courseTitle}</p>
//               <p><strong>Progress:</strong> {student.progress}%</p>
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => handleEditClick(index)}
//                   className="bg-blue-500 text-white px-3 py-1 rounded"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(index)}
//                   className="bg-red-500 text-white px-3 py-1 rounded"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AdminDashboard;



import React, { useEffect, useState } from 'react';
import { getItem, setItem } from '../../lib/localStorage';
import type { Students } from '../../lib/Types';

const AdminDashboard: React.FC = () => {
  const [students, setStudents] = useState<Students[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editData, setEditData] = useState<Partial<Students>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const saved = getItem<Students[]>("students") ?? [];
    setStudents(saved);
  }, []);

  const handleDelete = (index: number) => {
    const deleted = students.filter((_, i) => i !== index);
    setItem("students", deleted);
    setStudents(deleted);
  };

  const handleAdd = () => {
    const newStudent: Students = {
      id: Date.now(),
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
  };

  const handleEditClick = (index: number) => {
    setEditIndex(index);
    setEditData(students[index]);
    setIsModalOpen(true);
  };

  const handleEditChange = (field: keyof Students, value: string | number) => {
    setEditData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (editIndex === null) return;

    const updated = [...students];
    updated[editIndex] = { ...updated[editIndex], ...editData } as Students;

    setItem("students", updated);
    setStudents(updated);
    setIsModalOpen(false);
    setEditIndex(null);
    setEditData({});
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEditIndex(null);
    setEditData({});
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">All Registered Students</h1>

      <button
        onClick={handleAdd}
        className="bg-gray-600 text-white px-4 py-2 mb-4 rounded"
      >
        Add Student
      </button>

      {students.map((student, index) => (
        <div key={index} className="p-4 border-b flex flex-col gap-1">
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Course:</strong> {student.courseTitle}</p>
          <p><strong>Progress:</strong> {student.progress}%</p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => handleEditClick(index)}
              className="bg-blue-500 text-white px-3 py-1 rounded"
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
        </div>
      ))}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-[90%] max-w-md space-y-4">
            <h2 className="text-xl font-semibold mb-2">Edit Student</h2>
            <input
              type="text"
              value={editData.name || ""}
              onChange={(e) => handleEditChange("name", e.target.value)}
              placeholder="Name"
              className="border px-2 py-1 w-full"
            />
            <input
              type="email"
              value={editData.email || ""}
              onChange={(e) => handleEditChange("email", e.target.value)}
              placeholder="Email"
              className="border px-2 py-1 w-full"
            />
            <input
              type="text"
              value={editData.courseTitle || ""}
              onChange={(e) => handleEditChange("courseTitle", e.target.value)}
              placeholder="Course Title"
              className="border px-2 py-1 w-full"
            />
            <input
              type="number"
              value={editData.progress ?? 0}
              onChange={(e) => handleEditChange("progress", Number(e.target.value))}
              placeholder="Progress"
              className="border px-2 py-1 w-full"
            />

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={handleCancel}
                className="bg-gray-500 text-white px-4 py-1 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-4 py-1 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
