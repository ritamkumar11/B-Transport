# B-Transport 🚖📦

**B-Transport** is a full-stack MERN (MongoDB, Express, React, Node.js) web application for booking rental cabs, vehicles, and cargo transportation. It offers a responsive frontend, secure backend API, and MongoDB integration for persistent data storage.

---

## 🚀 Features

- User-friendly React frontend
- Express.js backend with API endpoints
- MongoDB for storing contact, vehicle, and cargo form submissions
- Multiple service forms: cab booking, vehicle rental, cargo
---
## 📁 Project Structure

B-Transport/
├── Backend/                  # Optional backend files (possibly unused)
│   └── index.js              # Server entry point (check if used or duplicate)
│
├── node_modules/             # Auto-generated dependencies (DO NOT PUSH)
│
├── public/                   # Static assets (images used across app)
│   ├── Bg_img.png
│   ├── Bg_img2.png
│   ├── Blog.jpg
│   ├── Logo2.jpg
│   ├── Rental_Cab.jpg
│   ├── Taxi.jpg
│   └── Transport_Carriage.jpg
│
├── src/                      # All React frontend code
│   ├── Components/           # Modular components grouped by purpose
│   │   ├── About/
│   │   │   └── Blog.jsx
│   │   │   └── Company.jsx
│   │   ├── Service/
│   │   │   ├── BookTransportation.jsx
│   │   │   ├── CityRides.jsx
│   │   │   └── HireAVehicle.jsx
│   │   ├── ContForm.jsx
│   │   ├── Enquiry.jsx
│   │   ├── Footer.jsx
│   │   ├── Help.jsx
│   │   ├── Home.jsx
│   │   ├── Layout.jsx
│   │   ├── Login.jsx
│   │   ├── Navbar.jsx
│   │   ├── OurServices.jsx
│   │   └── Services.jsx
│
│   ├── App.js                # Root component
│   ├── App.css               # Global styles
│   ├── main.jsx              # App entry point
│   └── index.html            # HTML shell
│
├── .gitignore                # Files/folders Git should ignore
├── package.json              # Project metadata and dependencies
├── package-lock.json         # Dependency tree lock
├── vite.config.js            # Vite config (React build tool)
├── README.md                 # Project documentation
└── eslint.config.js          # ESLint configuration

---

## 🧰 Tech Stack

- **Frontend**: React.js, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Tools**: CORS

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/ritamkumar11/B-Transport.git
cd B-Transport

### 2. Backend Setup

```bash
npm install
npm start

### 3. Frontend Setup
npm install
npm run dev


🗂️ MongoDB Collections Used
| Form Type      | Collection Name |
| -------------- | --------------- |
| Contact Form   | `contacts`      |
| Cab Booking    | `cabforms`      |
| Vehicle Rental | `vehicleforms`  |
| Cargo Inquiry  | `cargoforms`    |

🙋‍♂️ Author
Developed by Ritam Kumar