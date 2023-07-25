const express = require('express');
const router = express.Router();
const sleep = require('../models/sleep');

// Create
router.post('/', (req, res) => {
  console.log('Create sleep');
  // Add your create operation logic here
});

// Read
router.get('/:id', (req, res) => {
  console.log('Get sleep by ID');
  // Add your read operation logic here
});

// Update
router.put('/:id', (req, res) => {
  console.log('Update sleep by ID');
  // Add your update operation logic here
});

// Delete
router.delete('/:id', (req, res) => {
  console.log('Delete sleep by ID');
  // Add your delete operation logic here
});

module.exports = router;