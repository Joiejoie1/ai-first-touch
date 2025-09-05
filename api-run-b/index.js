const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// In-memory items storage
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' }
];

// GET /items endpoint
app.get('/items', (req, res) => {
  res.json(items);
});

// POST /items endpoint with validation
app.post('/items', (req, res) => {
  // Validate that body.name is a non-empty string
  if (!req.body.name || typeof req.body.name !== 'string' || req.body.name.trim() === '') {
    return res.status(400).json({ error: 'Name must be a non-empty string' });
  }

  // Create new item
  const newItem = {
    id: items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1,
    name: req.body.name
  };

  // Add to items array
  items.push(newItem);

  // Return the created item
  res.status(201).json(newItem);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});