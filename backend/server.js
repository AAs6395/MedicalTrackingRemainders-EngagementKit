const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'medical_tracker'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Make db accessible to routes
app.locals.db = db;

// Import Routes
const medicationRoutes = require('./routes/medications');
const reminderRoutes = require('./routes/reminders');
const vitalRoutes = require('./routes/vitals');
const appointmentRoutes = require('./routes/appointments');

// Use Routes
app.use('/api/medications', medicationRoutes);
app.use('/api/reminders', reminderRoutes);
app.use('/api/vitals', vitalRoutes);
app.use('/api/appointments', appointmentRoutes);

// Root endpoint
app.get('/', (req, res) => {
    res.json({ message: 'Medical Tracking API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});