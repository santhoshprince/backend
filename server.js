const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboradroutes');
const productRoutes = require('./routes/products');

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());
app.use(cors());

// Use the MongoDB URI from the environment variable or a default local URI
// const dbURI = process.env.MONGO_URI || 'mongodb://localhost:27017/role-based-api';

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the API backend!');
});

app.use('/api/auth', authRoutes);

app.use('/api/dashboard', dashboardRoutes);
app.use('/api/products', productRoutes);


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
