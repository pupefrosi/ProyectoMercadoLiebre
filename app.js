const express = require('express');
const path = require('path');

const app = express();

const publicFolderPath = path.resolve(__dirname, './public');
console.log(publicFolderPath);

app.use(express.static(publicFolderPath) );

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});


const port = process.env.PORT || 3001;
app.listen( port, ()=> console.log(`Servidor corriendo en el puerto ${port}`));