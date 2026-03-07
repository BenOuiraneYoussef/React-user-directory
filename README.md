👥 MERN User Management App
A fullstack MERN application that allows you to register and authenticate users, add user profiles with name, email, and phone, and search through the user list — all with form validation and secure JWT-based authentication.

🚀 Demo
Coming soon / Add your live link here
✨ Features
🔐 Authentication — Secure login & register with email and password
🪙 JWT Tokens — Protected routes using JSON Web Tokens
➕ Add Users — Add a user with name, email, and phone number
🔍 Search by Username — Instantly filter users by name
✅ Form Validation — Client-side and server-side form controls
📋 User List — View all added users in a clean table or card layout
🗑️ Delete Users — Remove users from the list
📱 Responsive Design — Works on all screen sizes
🛠️ Tech Stack
Layer	Technology	Usage
Frontend	React.js	UI & client-side logic
Frontend	React Router DOM	Multi-page navigation
Frontend	Axios	HTTP requests to the API
Backend	Node.js & Express.js	REST API server
Database	MongoDB & Mongoose	Data storage & modeling
Auth	JWT & bcrypt	Authentication & password hashing
📦 Installation
1. Clone the repository

git clone https://github.com/your-username/mern-user-app.git
cd mern-user-app
2. Install backend dependencies

cd server
npm install
3. Install frontend dependencies

cd ../client
npm install
4. Set up environment variables

Create a .env file inside the server/ folder:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
5. Run the backend

cd server
npm run dev
6. Run the frontend

cd client
npm start
Frontend runs on http://localhost:3000 — Backend runs on http://localhost:5000

🔑 Environment Variables
Variable	Description
MONGO_URI	Your MongoDB connection string
JWT_SECRET	Secret key for signing JWT tokens
PORT	Port for the Express server (default: 5000)
🔗 API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register a new account
POST	/api/auth/login	Login & receive JWT token
GET	/api/users	Get all users (protected)
POST	/api/users	Add a new user (protected)
DELETE	/api/users/:id	Delete a user (protected)
🗂️ Pages
Page	Description
/register Register	Create a new account with email & password
/login Login	Authenticate and access the app
/ Dashboard	View, search, and manage users
/add Add User	Form to add name, email & phone
📁 Project Structure
mern-user-app/
├── client/                   # React frontend
│   ├── src/
│   │   ├── components/       # Navbar, UserCard, SearchBar...
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── AddUser.jsx
│   │   ├── context/          # Auth context
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/                   # Express backend
│   ├── models/
│   │   ├── User.js           # User schema (name, email, phone)
│   │   └── Auth.js           # Auth schema (email, password)
│   ├── routes/
│   │   ├── authRoutes.js     # Login & register
│   │   └── userRoutes.js     # CRUD operations
│   ├── middleware/
│   │   └── authMiddleware.js # JWT protection
│   ├── server.js
│   └── package.json
│
└── README.md
🙌 Acknowledgements
React.js — Frontend framework
Express.js — Backend framework
MongoDB — Database
JWT — Authentication tokens
📄 License
This project is open source and available under the MIT License.
