const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Parse JSON requests
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the 'client' folder (assuming your HTML file is in the 'client' folder)
app.use(express.static('client'));

// Endpoint to receive console logs
app.post('/log', (req, res) => {
  const logMessage = req.body.message;
  console.log('Received log from the client:', logMessage);
  res.send('Log received successfully');
});

// Start the server
const port = 3000; // You can change this port number if needed
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
