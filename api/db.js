
//let mysql = require('mysql');
import mysql from "mysql"

export const db = mysql.createConnection({
    host:"192.168.0.128",
    user:"john",
    password:"Tshivuadi1!",
    database:"blogdb",
})

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });