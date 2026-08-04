# 🚀 Foodify

A full-stack food delivery web application that lets users browse food items, place orders, and manage food delivery operations through an admin panel.

---

## 📌 Overview

**Foodify** is a food delivery system built to provide a smooth online food ordering experience. It includes a user-facing frontend for browsing food items and placing orders, along with an admin panel for managing products, categories, and order-related data.

The project is designed to demonstrate a practical full-stack application with a modern frontend, a Node.js and Express backend, and a PostgreSQL database.

---

## ✨ Features

* 🍔 Browse food items and categories
* 🛒 Add items to cart and manage orders
* 🔐 User authentication and secure access
* 🧑‍💼 Admin panel for managing food items
* 📦 Order management functionality
* 🖼️ Image upload support for food items
* ⚡ Responsive and user-friendly UI
* 🌐 Full-stack integration with REST APIs

---

## 🛠️ Tech Stack

* **Frontend:** React, JavaScript, HTML, CSS
* **Backend:** Node.js, Express.js
* **Database:** PostgreSQL
* **Database Tool:** pgAdmin
* **Other:** REST APIs, Multer, dotenv, CORS, UUID, Git

---

## 📂 Project Structure

```bash
foodify/
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── assets/
│   ├── public/
│   └── package.json
│
│── backend/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── uploads/
│   ├── db/
│   ├── server.js
│   └── package.json
│
│── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Yuvraj-Kathad/Foodify.git
```

### 2. Navigate to the project

```bash
cd Foodify
```

### 3. Install dependencies

Install frontend dependencies:

```bash
cd frontend
npm install
```

Install backend dependencies:

```bash
cd ../backend
npm install
```

### 4. Configure environment variables

Create a `.env` file in the backend folder and add the required variables such as:

```env
PORT=5000
DATABASE_URL=your_postgresql_connection_string
```

### 5. Run the project

Start the backend:

```bash
cd backend
npm start
```

Start the frontend:

```bash
cd frontend
npm start
```

---

## 🚀 Future Improvements

* Add online payment integration
* Add order tracking
* Improve recommendation features
* Add better search and filtering
* Enhance admin analytics dashboard
* Improve mobile responsiveness further

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Author

* **Yuvraj Kathad**
* GitHub: https://github.com/Yuvraj-Kathad
* LinkedIn: https://www.linkedin.com/in/yuvraj-kathad/
