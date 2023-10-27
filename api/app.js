const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000; // Choose a port number

// Open the SQLite database connection
const db = new sqlite3.Database('x-ui.db');

// Define a route to retrieve user data by email
app.get('/user', (req, res) => {
  const email = req.query.email; // Retrieve email from query parameter

  // Query the database to get user data by email
  db.get(
    'SELECT * FROM client_traffics WHERE email = ?',
    [email],
    (err, row) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(row); // Send the user data as JSON response
    }
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
