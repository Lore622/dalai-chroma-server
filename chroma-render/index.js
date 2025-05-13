
const express = require('express');
const { ChromaClient } = require('chromadb');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;


// Initialize Chroma client
const client = new ChromaClient();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Basic health check endpoint
app.get('/', (req, res) => {
  res.json({ status: 'Chroma server is running' });
});

// Create a collection
app.post('/collection', async (req, res) => {
  try {
    const collection = await client.createCollection({
      name: req.body.name
    });
    res.json({ success: true, collection: collection.name });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Query embeddings
app.post('/query', async (req, res) => {
  try {
    const collection = await client.getCollection({
      name: req.body.collection
    });
    const results = await collection.query({
      queryEmbeddings: req.body.embeddings,
      nResults: req.body.nResults || 10
    });
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Chroma server running on port ${port}`);
});
