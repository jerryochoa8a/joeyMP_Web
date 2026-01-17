const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

/* =======================
   Middleware
======================= */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

/* =======================
   Static Files
======================= */
app.use('/images', express.static('uploads'));

/* =======================
   Database
======================= */
require('./config/mongoose.config');

/* =======================
   Routes
======================= */
require('./routes/item.routes')(app);
require('./routes/admin.routes')(app);

/* =======================
   Production React Build
   (DOES NOT RUN IN DEV)
======================= */
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

/* =======================
   Start Server
======================= */
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Listening at Port ${PORT}`);
});
