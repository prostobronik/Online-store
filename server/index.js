require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
// import dotenv from 'dotenv'
// dotenv.config()
// import express from 'express'
// import sequelize from './db.js'

const PORT = process.env.PORT || 5000

const app = express()

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

start()
