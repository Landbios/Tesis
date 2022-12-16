//express framework
const express = require('express');

//database connection
const db = require('./db/db');

//npm package for the encryptuon algorithm bcrypt for 
//secure storage of passwords
const bCrypt = require('bcryptjs');



//utility function to check if a form doesn't have undefined values
const checkFormData = require('./utils/checkFormData');

//utility function to transform the whole word of gender to one 
//char
//i.e: femenino => f; masculino => m 
const genderTransform = require('./utils/genderTo1Char');


//utility function to set 1 if animal is neutered or 0 if otherwise
const isNeutered = require('./utils/isNeutered');
//----------------------------------------------------------------
//creating express app
const server = express();
const app = server;

//to parse form data
app.use(express.urlencoded({extended: false}));

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

app.post('/loginCheck' , (req, res) => {
    const user = req.body.user;
    const pwd = req.body.password;

    const submissionArr = [user, pwd];

    const submissionResult = checkFormData(submissionArr);

    if (!submissionResult) {
        res.end();
        return;
    }

    const getbCryptedPwdQuery = `SELECT password FROM usuarios WHERE usuario='${user}'`;
    
    db.query(getbCryptedPwdQuery, (err, results, fields) => {
        //getting encPwd from db
        const encPwd = results[0].password;
        if (!bCrypt.compareSync(pwd, encPwd)) {
            //password is incorrect
            console.log("clave errónea");
            return;
        }

        // password is correct
        console.log("clave exitosa");
        res.end();
        return;

    });

})

app.get('/signup', (req, res) => {

    res.sendFile('./public/register.html', {
        root: __dirname
    });

});

app.post('/signup/createUser', (req, res) => {
    const doc = req.body.national_id;
    const name = req.body.name;
    const lastName = req.body.lastname;
    const birth = req.body.birth;
    const user = req.body.user;
    const email = req.body.mail;
    const gender = genderTransform(req.body.gender);
    const parroquia = req.body.parroquia;
    const sector = req.body.sector;
    const tlf = req.body.tlf;
    const password = bCrypt.hashSync(req.body.r_password);
    
    //putting in an array all values from the sign up submission
    const formSubmission = [name, lastName, user, email, birth, doc, gender, parroquia, sector, password, tlf];

    //getting result of submission
    const submissionResult = checkFormData(formSubmission);
    
    //checking whether the result succeeds or not
    if (!submissionResult) {
        //data is missing in the form
        res.end();
        return;
    }

    //everything is going well, creating user process begins
    const query = `INSERT INTO usuarios(cedula, nombre, apellido, fecha_nacimiento, genero, parroquia, sector, telefono, email, usuario, password) VALUES ('${doc}', '${name}', '${lastName}', '${birth}', '${gender}', '${parroquia}', '${sector}', '${tlf}', '${email}', '${user}', '${password}')`; 

    //inserting new user
    db.query(query, (err, results, fields) => {
        if (err) {
            console.log("ha ocurrido un error");
            throw err;
        }
        console.log("ingresado correctamente el usuario");
    })

});


//form for animal registration
app.get('/animal/animalRegister', (req, res) => {
    res.sendFile('./public/animalRegister.html', {
        root: __dirname
    }, (err) => {
        if (err) throw err;
        res.end();
    });
    
});

app.post('/animal/animalDB', (req, res) => {
    const query = "SELECT * FROM animales";
    db.query(query, (err, results, fields) => {
        if (err) throw err;

        res.json(results);
        res.end();
    })
});

app.post('/animal/animalRegister/register', (req, res) => {
    const name = req.body.name;
    const breed = req.body.breed;
    const age = req.body.age;
    let neuter = isNeutered(req.body.neuter);
    const gender =  genderTransform(req.body.gender);
    const desc = req.body.desc;


    const formSubmission = [name, breed, age, neuter, gender, desc];

    const result = checkFormData(formSubmission);

    if (!result) {
        res.end();
        return;
    }

    registerAnimalQuery = `INSERT INTO animales(nombre, raza, descripcion, edad, es_castrado, genero) VALUES ('${name}', '${breed}', '${desc}', '${age}', '${neuter}', '${gender}')`;

    db.query(registerAnimalQuery, (err, results, fields) => {
        if (err) throw err;
        console.log(results);
        console.log('Animal registrado');

    });
});

//application port, you can change this to any number port as long as it is not being used by something else on your pc
const port = 8081;
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server on port ${port}`);
})