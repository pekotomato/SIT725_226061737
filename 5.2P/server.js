const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files from public/
app.use(express.static('public'));

// Import route file
const bookRoutes = require('./routes/book.js');

// Mount the route at /api/books
app.use('/api/books', bookRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Books Catalog Home Page!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});