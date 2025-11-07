// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors({
    origin: [
        'http://localhost:3000', // Giữ lại để chạy local
        'https://www.nukeweb.site', // THÊM DÒNG NÀY
        'https://nukeweb.site', // THÊM DÒNG NÀY
    ],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE','PUT'],

}));
app.use(express.json());
// Kết nối tới MongoDB
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/todolist";
mongoose.connect(MONGO_URI)
    .then(() => console.log('Đã kết nối thành công tới MongoDB!'))
    .catch(err => console.error('Lỗi kết nối MongoDB:', err));

// Import Routes

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server đang chạy trên cổng ${PORT}`);
});