const express = require('express');
const morgan = require('morgan');

require('dotenv').config();

const PORT = process.env.PORT || 4000;

express()
  .use(morgan('dev'))
  .use(express.urlencoded({ extended: true }))
  .use(express.json())

  .listen(PORT, () => {
    console.info(`🌍 Listening on port ${PORT}`);
  });
