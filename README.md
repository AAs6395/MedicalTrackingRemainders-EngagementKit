# Medical Tracking & Engagement Kit - DBMS Project

A full-stack web application for tracking medications, reminders, vital signs, and medical appointments with MySQL database backend.

## 📁 Project Directory Structure

```
medical-tracking-system/
│
├── backend/
│   ├── config/
│   │   └── database.sql          # Database schema & sample data
│   ├── routes/
│   │   ├── medications.js        # Medication endpoints
│   │   ├── reminders.js          # Reminder endpoints
│   │   ├── vitals.js             # Vital signs endpoints
│   │   └── appointments.js       # Appointment endpoints
│   ├── server.js                 # Main server file
│   ├── package.json              # Node dependencies
│   └── .env                      # Environment variables
│
└── frontend/
    ├── index.html                # Main HTML file
    ├── styles.css                # Styling
    └── script.js                 # Frontend JavaScript (API integrated)
```

## 🛠️ Technologies Used

### Backend:
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MySQL** - Relational database
- **mysql2** - MySQL client for Node.js
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend:
- **HTML5** - Structure
- **CSS3** - Styling with animations
- **JavaScript (ES6+)** - Interactivity & API calls

## 📋 Prerequisites

Before you begin, ensure you have:

1. **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
2. **MySQL** (v8.0 or higher) - [Download](https://dev.mysql.com/downloads/)
3. **Text Editor** - VS Code, Sublime, etc.
4. **Web Browser** - Chrome, Firefox, Edge

## 🚀 Installation & Setup

### Step 1: Create Project Structure

Create the following folder structure:

```bash
mkdir medical-tracking-system
cd medical-tracking-system
mkdir backend frontend
cd backend
mkdir routes config
```

### Step 2: Setup Backend

1. **Navigate to backend folder:**
```bash
cd backend
```

2. **Initialize Node.js project:**
```bash
npm init -y
```

3. **Install dependencies:**
```bash
npm install express mysql2 cors body-parser dotenv
npm install --save-dev nodemon
```

4. **Create all backend files:**
   - Copy `server.js` to `backend/`
   - Copy `package.json` to `backend/`
   - Copy `.env` to `backend/`
   - Copy `database.sql` to `backend/config/`
   - Copy all route files to `backend/routes/`

5. **Configure .env file:**
   Edit `.env` and update with your MySQL credentials:
```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=medical_tracker
```

### Step 3: Setup Database

1. **Open MySQL:**
```bash
mysql -u root -p
```

2. **Run the database script:**
```sql
SOURCE /path/to/backend/config/database.sql;
```

Or manually execute the SQL commands from `database.sql`

3. **Verify database creation:**
```sql
USE medical_tracker;
SHOW TABLES;
```

You should see 4 tables: medications, reminders, vitals, appointments

### Step 4: Setup Frontend

1. **Navigate to frontend folder:**
```bash
cd ../frontend
```

2. **Create frontend files:**
   - Copy `index.html` to `frontend/`
   - Copy `styles.css` to `frontend/`
   - Copy `script.js` (updated version) to `frontend/`

3. **Important:** Make sure the API URL in `script.js` matches your backend:
```javascript
const API_URL = 'http://localhost:3000/api';
```

## ▶️ Running the Application

### Start Backend Server:

1. **Navigate to backend folder:**
```bash
cd backend
```

2. **Start the server:**
```bash
npm start
```

Or for development with auto-restart:
```bash
npm run dev
```

You should see:
```
Server is running on port 3000
Connected to MySQL database
```

### Start Frontend:

1. **Navigate to frontend folder:**
```bash
cd ../frontend
```

2. **Open with Live Server (VS Code):**
   - Right-click on `index.html`
   - Select "Open with Live Server"

   **OR use any local server:**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js http-server
   npx http-server -p 8000
   ```

3. **Open in browser:**
```
http://localhost:8000
```

## 🧪 Testing the Application

### Test API Endpoints (Using Browser or Postman):

1. **Get all medications:**
```
GET http://localhost:3000/api/medications
```

2. **Add medication:**
```
POST http://localhost:3000/api/medications
Body: {
  "name": "Aspirin",
  "dosage": "500mg",
  "frequency": "Once daily",
  "time": "09:00:00"
}
```

3. **Get all reminders:**
```
GET http://localhost:3000/api/reminders
```

4. **Add reminder:**
```
POST http://localhost:3000/api/reminders
Body: {
  "title": "Doctor Appointment",
  "date_time": "2025-10-15 10:00:00",
  "notes": "Annual checkup"
}
```

## 📊 Database Schema

### Medications Table
- `id` (INT, Primary Key, Auto Increment)
- `name` (VARCHAR)
- `dosage` (VARCHAR)
- `frequency` (VARCHAR)
- `time` (TIME)
- `taken` (BOOLEAN)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

### Reminders Table
- `id` (INT, Primary Key, Auto Increment)
- `title` (VARCHAR)
- `date_time` (DATETIME)
- `notes` (TEXT)
- `notified` (BOOLEAN)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

### Vitals Table
- `id` (INT, Primary Key, Auto Increment)
- `blood_pressure` (VARCHAR)
- `heart_rate` (INT)
- `temperature` (DECIMAL)
- `blood_sugar` (INT)
- `recorded_date` (DATETIME)
- `created_at` (TIMESTAMP)

### Appointments Table
- `id` (INT, Primary Key, Auto Increment)
- `doctor` (VARCHAR)
- `type` (VARCHAR)
- `date_time` (DATETIME)
- `location` (VARCHAR)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

## 🔧 API Endpoints Reference

### Medications
- `GET /api/medications` - Get all medications
- `GET /api/medications/:id` - Get single medication
- `POST /api/medications` - Add medication
- `PUT /api/medications/:id/taken` - Mark as taken
- `PUT /api/medications/:id` - Update medication
- `DELETE /api/medications/:id` - Delete medication
- `GET /api/medications/stats/count` - Get statistics

### Reminders
- `GET /api/reminders` - Get all reminders
- `GET /api/reminders/:id` - Get single reminder
- `GET /api/reminders/today/list` - Get today's reminders
