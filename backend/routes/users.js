const express = require('express');
const { auth } = require('../middleware/auth');
const User = require('../models/User');
const Issue = require('../models/Issue');

const router = express.Router();

// @route   GET /api/users/profile
// @desc    Get current user profile and their reported issues
// @access  Private
router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const myIssues = await Issue.find({ reportedBy: req.user.id })
      .sort({ createdAt: -1 })
      .populate('reportedBy', 'name email');

    res.json({
      user,
      issues: myIssues,
      stats: {
        total: myIssues.length,
        resolved: myIssues.filter(i => i.status === 'Resolved').length,
        pending: myIssues.filter(i => i.status === 'Pending').length,
        inProgress: myIssues.filter(i => i.status === 'In Progress').length
      }
    });
  } catch (err) {
    console.error('Profile fetch error:', err);
    res.status(500).json({ message: 'Server error while fetching profile' });
  }
});

module.exports = router;
