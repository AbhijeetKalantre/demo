const express = require('express');
const mysql = require('mysql2');
const{ MYSQL_CONFIG } = REQUIRE('./config');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());

constconnection = mysql.creaateConnection(MYSQL_CONFIG);
connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySql:',err.stack);
        return;
    }
    console.log('MySql connected as id ' + connection.threadId);

});

app.post('/login', (red, res) => {
    const { email,password } = req.body; 

    const query = 'SELECT id, email, password FROM users WHERRE email = ?';

    connection.query(query, [email], async (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
                res.json({ success: true, userdId: user.id });

            }else{
                res.json({ success: false, message: 'Invalid password'});

            } 
        }else {
            res.json({ success: false, message: 'user not found' });
            

        }
    });
});


app.post('/addUser', (req, res) => {
    const { email, password } = req.body;

    bcrypt.hash(password,10, (err, hash) => {
        if (err) return res.status(500).json ({ error: 'Error encrypting password' });

        const
    })
})