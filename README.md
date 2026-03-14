# 🚧 CivicFix – Smart Civic Issue Reporting Platform

## 📌 Problem Statement

Many civic problems such as potholes, garbage dumps, broken streetlights, and water leaks go unresolved because citizens do not have a simple platform to report them and authorities cannot track them efficiently.

## 💡 Solution

**CivicFix** is a full-stack web application that allows citizens to report civic issues in their area and enables authorities to track and resolve them through an organized dashboard.

---

## 🚀 Features

* User Authentication (Signup / Login)
* Report civic issues with description and location
* Upload images of issues
* Dashboard to track reported issues
* Search, filter, and sort issues
* Pagination for large datasets
* Dark / Light theme toggle
* Responsive UI using Tailwind CSS
* CRUD operations for managing issues
* Admin status updates (Pending → In Progress → Resolved)

---

## 🛠 Tech Stack

### Frontend

* ReactJS
* Tailwind CSS
* React Router
* Context API

### Backend

* Node.js
* Express.js

### Database

* MongoDB

---

## 📂 Project Structure

```
civicfix/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── context/
│   └── App.jsx
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
│
└── README.md
```

---

## 🔑 Core Functionalities

### Authentication

Users can register and log in securely.

### Issue Reporting

Citizens can submit civic problems with detailed descriptions and images.

### Issue Tracking

Users can monitor the status of reported problems.

### Admin Management

Authorities can verify reports and update issue status.

---

## ⚙️ API Endpoints

```
POST /api/auth/signup
POST /api/auth/login

GET /api/issues
POST /api/issues
PUT /api/issues/:id
DELETE /api/issues/:id
```

---

## 🧪 Demo Flow

1. User signs up or logs in
2. User reports a civic issue
3. Issue appears in dashboard
4. Admin reviews and updates issue status
5. User can track resolution progress

---

## 📱 Responsive Design

The UI is fully responsive and works across:

* Desktop
* Tablet
* Mobile devices

---

## 🎯 Hackathon Requirements Implemented

✔ Routing with React Router
✔ React Hooks (useState, useEffect, useRef, useContext)
✔ Authentication System
✔ Global State Management (Context API)
✔ Search, Filter & Sorting
✔ Debouncing
✔ Pagination
✔ CRUD Operations
✔ REST API Integration
✔ Responsive UI

---

## 👨‍💻 Author

Developed as part of a **Full Stack Hackathon Project**.

---
