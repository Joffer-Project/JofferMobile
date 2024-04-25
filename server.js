/* const express = require('express');
const { Client, Pool } = require('pg'); // Added Pool here
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;

const client = new Client({
  connectionString: DATABASE_URL,
});

const pool = new Pool({ // This should now work
  user: 'joffer',
  host: 'dpg-cok2refsc6pc738k5vgg-a',
  database: 'joffer_l63o',
  password: 'JB3o1qFH98qw5RKB1Jd3GtzzvoBwy037',
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

app.use(bodyParser.json());

// API key authentication middleware
const authenticate = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];

  if (apiKey === process.env.API_KEY) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

app.get('/data', authenticate, async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM your_table');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}); 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const crypto = require('crypto');

const generateApiKey = () => {
  return crypto.randomBytes(32).toString('hex');
};

console.log(generateApiKey()); */