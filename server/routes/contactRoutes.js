import { Router } from 'express';
import { handleContactSubmit, getAllMessages } from '../controllers/contactController.js';

const router = Router();

// POST /api/contact - Handle contact form submissions
router.post('/contact', handleContactSubmit);

// GET /api/contact/messages - View all stored contact messages
router.get('/contact/messages', getAllMessages);

// GET /api/health - Endpoint for uptime monitoring and connectivity check
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

export default router;
