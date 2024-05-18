/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"
const { toDefaultValue } = require('sequelize/lib/utils');

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING, // Email will be updated in routing
    allowNull: false
  },

  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: 'https://i.pinimg.com/originals/6d/7f/16/6d7f164634919b5be31d6bc24ef83a0f.jpg'
  },

  gpa: {
    type: Sequelize.DOUBLE,
    allowNull: true,
    toDefaultValue: 0.0,
    validate:{
      min: 0.0,
      max: 4.0
    }
  }
});

// Export the student model 
module.exports = Student;