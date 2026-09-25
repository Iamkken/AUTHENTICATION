const express = require('express');
const connectDB = require('./src/configs/db');
const morgan = require('morgan');

require('dotenv').config();

const app = express();
const userRoutes = require('./src/routes/user.routes');

const PORT = process.env.PORT || 7011;

app.use(express.json());
app.use(morgan('dev'));
connectDB();

app.get('/', (req, res) => {
    res.send('WELCOME!!! This is your login page');
});

app.use('/api/v1/user', userRoutes);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
