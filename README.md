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
├── Backend/                 
│   └── index.js              
├── node_modules/             
│
├── public/                   
│   ├── Bg_img.png
│   ├── Bg_img2.png
│   ├── Blog.jpg
│   ├── Logo2.jpg
│   ├── Rental_Cab.jpg
│   ├── Taxi.jpg
│   └── Transport_Carriage.jpg
│
├── src/                      
│   ├── Components/           
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
│   ├── App.js                
│   ├── App.css               
│   ├── main.jsx              
│   └── index.html            
│
├── .gitignore                
├── package.json              
├── package-lock.json         
├── vite.config.js            
├── README.md                 
└── eslint.config.js          

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
