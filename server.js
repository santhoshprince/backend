const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
dotenv.config();


const app = express();
app.use(express.json());
app.use(cors());
const dbURI = process.env.MONGO_URI_CLOUD || 'mongodb://localhost:27017/mydatabase';
// MongoDB connection
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the API backend!');
});

app.use('/api/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
