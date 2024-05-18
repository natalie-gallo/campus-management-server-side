/*==================================================
/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://th.bing.com/th/id/R.1a7ece63331491bf6f1d46dff1e8477f?rik=uH%2fs6StVPDgISA&pid=ImgRaw&r=0&sres=1&sresct=1',
  }
});

// Export the campus model
module.exports = Campus;