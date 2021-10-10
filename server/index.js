const express = require("express");
const mysql = require("mysql");
var connection = mysql.createConnection({
  host: 'pdcstack-rdscluster-1ec9pf3ips7b7.cluster-ro-cobwtd0jfkg2.us-east-2.rds.amazonaws.com',
  user:'username',
  password:'password',
  port: 3306,
  database: "sys"
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed:' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  connection.query("SELECT * FROM `donut`", function(error, results,fields) {
    if (error) throw error;
    
    console.log(results);
    res.send(results);
  })});
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });