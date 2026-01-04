const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");

const db = new sqlite3.Database("garden.db");

const schema = fs.readFileSync("./db/schema.sql", "utf8");
const seed = fs.readFileSync("./db/seed.sql", "utf8");

db.serialize(() => {
  db.exec(schema);
  db.exec(seed);
});

module.exports = db;

