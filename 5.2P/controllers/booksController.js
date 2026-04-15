const books = require('../services/booksServices');

exports.getAllBooks = (req, res) => {
  res.json({
    status: 200,
    data: books,
    message: 'Books catalog retrieved successfully'
  });
};

exports.getBookById = (req, res) => {
  const book = books.find(b => b.id === req.params.id);
  if (!book) {
    return res.status(404).json({
      status: 404,
      data: null,
      message: 'Book not found'
    });
  }
  res.json({
    status: 200,
    data: book,
    message: 'Book retrieved successfully'
  });
};