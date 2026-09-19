import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { corsOptions } from './config/corsOptions.js';
import contactRoutes from './routes/contactRoutes.js';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security & Parsing Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple Request Logging Middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// API Routes
app.use('/api', contactRoutes);

// Root Route
app.get('/', (req, res) => {
  res.json({
    name: 'Full-Stack Portfolio API Server',
    version: '1.0.0',
    status: 'running',
    endpoints: {
      contact: 'POST /api/contact',
      messages: 'GET /api/contact/messages',
      health: 'GET /api/health',
    },
  });
});

// 404 Not Found Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Cannot ${req.method} ${req.originalUrl} - Route not found`,
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err.stack);
  res.status(500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`🚀 Portfolio API Server is running on port: ${PORT}`);
  console.log(`📡 Local URL: http://localhost:${PORT}`);
  console.log(`🔗 API Endpoint: http://localhost:${PORT}/api/contact`);
  console.log(`===============================================`);
});
