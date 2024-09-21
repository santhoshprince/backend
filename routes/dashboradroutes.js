// routes/dashboardRoutes.js
const express = require('express');
const { authenticateToken } = require('../middleware/authMiddleware');
const router = express.Router();

// Admin Dashboard Route
router.get('/admin', authenticateToken, (req, res) => {
  if (req.user.role === 'admin') {
    res.json({ message: 'Welcome to the Admin Dashboard!' });
  } else {
    res.status(403).json({ message: 'Access denied: Admins only.' });
  }
});

// Employee Dashboard Route
router.get('/employee', authenticateToken, (req, res) => {
  if (req.user.role === 'employee') {
    res.json({ message: 'Welcome to the Employee Dashboard!' });
  } else {
    res.status(403).json({ message: 'Access denied: Employees only.' });
  }
});

module.exports = router;
