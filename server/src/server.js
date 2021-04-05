const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();

const PORT = process.env.PORT || 4000;

express()
  .use(cors({ origin: 'http://localhost:3000' }))
  .use(morgan('dev'))
  .use(express.urlencoded({ extended: true }))
  .use(express.json())

  .post('/', (req, res) => {
    res
      .status(500)
      .json({
        body: req.body,
        status: 500,
        message: "Something isn't hooked up right 😕",
      });
  })

  .listen(PORT, () => {
    console.info(`🌍 Listening on port ${PORT}`);
  });
