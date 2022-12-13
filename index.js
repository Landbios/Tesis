const express = require('express');

const server = express();

const app = server;


//serving static content
app.use(express.static(__dirname + '/public'));

//routes

app.get('/', (req, res) => {
    res.type('html');
    res.write(`
    <span>
        <a href="/login">Inicio de sesión</a>
        <a href="/signup">Registro</a>
    </span>
    <h1>Bienvenidos a nuestro sitio web</h1>
    `, 'utf-8');
    res.end();
})

app.get('/login', (req, res) => {

    res.sendFile('./public/login.html', {
        root: __dirname
    });


});

app.get('/signup', (req, res) => {

    res.sendFile('./public/register.html', {
        root: __dirname
    });

});


//application port, you can change this to any number port as long as it is not being used by something else on your pc
const port = 8081;
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server on port ${port}`);
})