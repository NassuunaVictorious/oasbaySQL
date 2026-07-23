// server.js
//importing packages

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs'); //file systems
const {
validateUsername,
validatePassword
} = require('./validation');

const app = express(); //create express application

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// Start from a clean file every time you restart, so the demo is repeatable
if (fs.existsSync('./oasbay.sqlite'))
    fs.unlinkSync('./oasbay.sqlite');
// Create and seed a file-based SQLite database (so DB Browser for
//SQLite can open it too)
const db = new sqlite3.Database('./oasbay.sqlite');
db.serialize(() => {
    db.run(`CREATE TABLE technicians (
id INTEGER PRIMARY KEY,
username TEXT,
password TEXT,
role TEXT
)`);
    db.run(`INSERT INTO technicians (username, password, role) VALUES
('kato', 'kato2024', 'senior_technician'),
('amina', 'amina2024', 'technician'),
('admin', 'admin123', 'admin')`);
});
// A simple login form to test with
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/login.html");
});
//INSECURE LOGIN
// A simple login form to test with
// goes inside server.js, above app.listen()
app.post('/login',(req,res)=>{


const {username,password}=req.body;



// Backend validation

if(!validateUsername(username)){

    return res.send("Invalid username format");

}


if(!validatePassword(password)){

    return res.send("Invalid password format");

}



// Parameterized query

const query =
"SELECT * FROM technicians WHERE username=? AND password=?";


db.get(
query,
[username,password],
(err,row)=>{


if(err){

return res.send("Database error");

}


if(row){

return res.send(
`Welcome ${row.username}`
);

}


return res.send("Invalid login");


});


});
// >>> the /login route from Step 1 goes here <<<
app.listen(3000, () => console.log('Running at http://localhost:3000'));

//SECURE LOGIN
// server.js - replace the /login route with this SAFE version
// placeholders (?) keep data separate from SQL

// >>> the /login route from Step 1 goes here <<<
