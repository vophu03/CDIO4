const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Environment configuration
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';

// Connect to MongoDB if URI is provided
if (!MONGODB_URI) {
  console.warn('[warn] MONGODB_URI is not set. API will run without DB connection.');
} else {
  mongoose
    .connect(MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));
}

// Middlewares
app.use(morgan('combined'));
if (CORS_ORIGIN === '*') {
  app.use(cors());
} else {
  app.use(cors({ origin: CORS_ORIGIN, credentials: true }));
}
app.use(cookieParser());
app.use(express.json());

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// Root
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Routers
const AuthRouter = require('./src/Routers/Auth.js');
app.use('/api/auth', AuthRouter);

// Start server
app.listen(PORT, () => console.log(`API listening on ${PORT}`));

