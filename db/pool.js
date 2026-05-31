const dotenv = require("dotenv").config();
const { Pool } = require("pg");

const port = process.env.PGPORT;
const password = process.env.PGPASSWORD
const host = process.env.PGHOST
const user = process.env.PGUSER
const db = process.env.PGDATABASE

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
  host: host, // or wherever the db is hosted
  user: user,
  database: db,
  password: password,
  port: port// The default port
});