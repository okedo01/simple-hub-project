
# 🎓 StudentHub

StudentHub is a modern web application built with **React + TypeScript** that allows users to browse available courses, register students, and manage enrollments with ease. It includes form validation, state management with Context API, real-time storage via **Firebase Firestore**, and a beautiful UI using **ShadCN UI** components.

---

## 🔗 Live Demo

👉 [View Live Site](https://simple-hub-okedo01.netlify.app/login)  
👉 [GitHub Profile](https://github.com/okedo01)

---

## 📸 Screenshots

![Home Page](./screenshots/home.png)  
![Register Page](./screenshots/register.png)  
![Student List](./screenshots/students.png)

---

## 🛠️ Features

### 🧑‍🎓 Student Management
- View list of enrolled students (from Firebase Firestore)
- Add new student via registration form
- Edit student data (in-memory/local context)
- Delete student records from Firebase with confirmation

### 📚 Course Enrollment
- Browse available courses (loaded from local JSON)
- Register a student to a selected course
- View enrolled students per course
- Auto-save student enrollment in Firebase

### 🔐 Authentication (Mock)
- Simple login/signup form
- Auth state handled via Context API
- Route protection for logged-in users

### ✅ Form Validation
- Powered by `React Hook Form` for efficient form handling
- Integrated with `Zod` for schema-based validation
- Validates email, passwords, and required fields

### 🎨 UI Components (ShadCN UI)
- Beautiful, accessible design using Radix primitives
- Buttons, inputs, cards, modals, tabs
- Fully styled with Tailwind CSS

### 🧯 Error Boundaries
- Gracefully handles unexpected React errors
- Displays fallback UI instead of crashing

---

## 🔧 Tech Stack

| Tech             | Description                              |
|------------------|------------------------------------------|
| React            | UI library                               |
| TypeScript       | Static typing                            |
| React Router     | Routing between pages                    |
| Context API      | Global state management                  |
| React Hook Form  | Form management                          |
| Zod              | Schema validation                        |       
| ShadCN UI        | Accessible UI built on Radix             |
| Tailwind CSS     | Utility-first styling                    |
| SweetAlert2      | Custom popups and notifications          |

---

## 📁 Project Structure

