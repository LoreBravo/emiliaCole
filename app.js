const express = require('express');
const path = require('path');
PORT = 3030

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => res.sendFile(path.join(__dirname, "views", "home.html")));
app.get('/about', (req,res) => res.sendFile(path.join(__dirname, "views", "about.html")));
app.get('/music', (req,res) => res.sendFile(path.join(__dirname, "views", "music.html")));
app.get('/contact', (req,res) => res.sendFile(path.join(__dirname, "views", "contact.html")));

app.listen(3030, () => console.log(`Servidor corriendo en http://localhost:${PORT}`))



