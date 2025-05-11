# 💳 CREDIT-APP — Full Stack Application

A full-stack **Credit Management Application** built using **Next.js (Frontend)** and **Node.js + Express + MongoDB (Backend)**.

---

## 🌐 Live Demo

🔗 [Visit the App](https://credit-app-woad.vercel.app)

---

## 🚀 Tech Stack

### Frontend
- Next.js (App Router)
- Tailwind CSS
- React

### Backend
- Node.js
- Express.js
- MongoDB (via Mongoose)

---

## 🖼️ Frontend Overview

The frontend is built with **Next.js (App Router)** and **Tailwind CSS**, providing a smooth, responsive UI for managing credit records. It communicates with the backend through REST APIs.

### Key Features
- User login & registration UI
- Dashboard for credit records
- Fully responsive design
- API integration with backend

---

## 🖥️ Backend Overview

The backend is built using **Express.js** and uses **MongoDB** for data storage. It handles user registration/login and credit record CRUD operations.

### Key Features
- RESTful APIs for all operations
- MongoDB integration via Mongoose
- Basic auth functionality (register/login)

---

## ⚙️ Setup Instructions

### 📁 Frontend Setup

1. Clone the frontend repo:

   ```bash
   git clone https://github.com/yuvaarajj/CREDIT-APP.git
   cd CREDIT-APP


🔌 API Endpoints
Method	Endpoint	Description
POST	  /register	Register a new user
POST	  /login	  User login
GET	    /credits	Get all credit entries
POST	  /credits	Create a new credit entry


📁 Project Structure
Frontend (CREDIT-APP)
arduino
Copy
Edit
CREDIT-APP/
├── public/
├── src/
│   └── app/
│       ├── login/
│       ├── register/
│       └── dashboard/
├── components/
├── tailwind.config.mjs
├── next.config.mjs
└── ...

Backend (CREDIT-APP-backend)
bash
Copy
Edit
CREDIT-APP-backend/
├── models/
│   └── Credit.js
├── routes/
│   └── credits.js
├── db.js
├── app.js
├── .env
└── ...


👨‍💻 Author
Yuva Raj Venkata
📧 Email: ryuva125@gmail.com
🔗 GitHub: @yuvaarajj


