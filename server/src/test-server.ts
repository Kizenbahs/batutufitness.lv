import express from 'express';
import cors from 'cors';

const app = express();

// Enable CORS for all origins during testing
app.use(cors());
app.use(express.json());

// Basic test route
app.get('/test', (req, res) => {
  res.json({ message: 'Test server is running!' });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Test server is running on http://localhost:${PORT}`);
}); 