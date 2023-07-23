const express = require('express');
const app = express();
const dotenv = require('dotenv'); // Import dotenv package

// Load environment variables from config.env
dotenv.config();

const port = process.env.PORT; // Use the PORT environment variable or default to 3000

app.get("/",(req,res)=>{
   res.send("Server is running")})
// API 1 
app.get('/api', (req, res) => {
    return res.status(200).json({ message: 'API 1 is working!' });
});
// API 2 
app.get('/apitest', (req, res) => {
    return res.status(200).json({ message: 'API 2 is working!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
