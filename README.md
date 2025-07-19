# 🎓 Student Fee Management System - Full Stack Web App

This is a full stack web application developed as part of the technical assignment for the Full Stack Web Developer Internship at **Elite8 Digital**. The application allows students to securely manage their fee payment status through a login-based interface.

---

## 🚀 Features

### 🔗 Navigation Bar
- Two tabs: `All Students` and `Profile`

### 👥 All Students Page
- Displays a list of all students with:
  - Name
  - Email
  - Fees Paid Status (`Yes / No`)
- Real-time update of payment status when a student marks their fees as paid from the Profile page.

### 👤 Profile Page
- **Authentication required**
- After login, a student can:
  - View and edit their name and email
  - View their current fee payment status
  - If fees are unpaid:
    - A `Pay Fees` button appears
    - On clicking, redirects to a form to simulate payment
    - After "Pay Now", updates Fees Paid status to `Yes` on both Profile and All Students pages

---

## 🛠️ Tech Stack

### Frontend:
- React.js (with Hooks or Redux)
- Tailwind CSS or Bootstrap for styling
- React Router for page navigation

### Backend:
- Node.js + Express.js

### Database:
- MongoDB with Mongoose (NoSQL)

### Authentication:
- JSON Web Tokens (JWT)
- bcrypt for password hashing

---
