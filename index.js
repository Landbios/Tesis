//express framework
const express = require('express');



//models
const userModel = require('./src/models/User');
const AnimalModel = require('./src/models/Animal');


//utility class (specific purposes methods)
const utils = require('./src/utils/Utils');

//creating express app
const server = express();
const app = server;

//express session 

const session = require('express-session');
const User = require('./src/models/User');
app.use(session({

    secret:'secret',
    resave:true,
    saveUninitialized:true,



}));


// defining our view engine

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//to parse form data
app.use(express.urlencoded({ extended: true }));

//serving static content
app.use(express.static(__dirname + '/public'));

//routes



app.get('/login', (req, res) => {
    res.render("login",{wronguser:""})
});

app.post('/login', (req, res) => {
    const userName = req.body.user;
    const pwd = req.body.password;
    
    userModel.loginUser(userName, pwd)
        .then((resolve) => {
            req.session.logged = resolve.login;
            req.session.name = resolve.user;
            
            
            res.redirect(resolve.link);
        })
        .catch((rej) => {
            rej.render("login",{wronguser:"Usuario o contraseña incorrecta"})

            
            
        });

})

//Session autentication

app.get('/',(req, res)=>{
    if(req.session.logged){
        
        res.render('main', {
            login: true,
            name: req.session.name,
            page_name:'home'

        });

    }else{
        console.log(User);
        res.render('main',{
            login:false,
            name:'',
            page_name:'home'

        })
    }
})


app.get('/animal',(req, res)=>{
    if(req.session.logged){
        res.render('animal_adopt', {
            login: true,
            name: req.session.name,
            page_name:'animal'

        });

    }else{

        res.render('animal_adopt',{
            login:false,
            name:'',
            page_name:'animal'
        })
    }
})


//Log-out

app.get('/logout',(req,res)=>{

    req.session.destroy(()=>{
        res.redirect('/')
    })

})


//user registration
app.get('/signup', (req, res) => {

    res.sendFile('./public/register.html', {
        root: __dirname
    });

});

//user registration processing
app.post('/signup', (req, res) => {
    const dni = req.body.national_id;
    const name = req.body.name;
    const lastName = req.body.lastname;
    const birth = req.body.birth;
    const gender = utils.genderTo1Char(req.body.gender);
    const parroquia = req.body.address;
    const sector = req.body.sector;
    const tlf = req.body.tlf;
    const mail = req.body.mail;
    const userName = req.body.user;
    const password = req.body.r_password;

    const user = new userModel(dni, name, lastName, birth, gender, parroquia, sector, tlf, mail, userName, password);

    userModel.createUser(user);

    res.end();
});


//form for animal registration
app.get('/animalRegister', (req, res) => {

    res.sendFile('./public/animal_regist.html', {
        root: __dirname
    });

});

app.post('/animalRegister', (req, res) => {

    const name = req.body.name;
    const specie = req.body.specie
    const description = req.body.description;
    let neuter = utils.isNeutered(req.body.isNeutered);
    const age = req.body.animal_age;
    const gender = utils.genderTo1Char(req.body.gender);
    const breed = req.body.breed;

    const animal = new AnimalModel(name, specie, breed, description, age, neuter, gender);

    AnimalModel.addAnimal(animal);

    res.end();
});

//list of all animals
app.post('/animal/animalDB', (req, res) => {
    AnimalModel.getAllAnimals(res);
});
//application port, you can change this to any number port as long as it is not being used by something else on your pc
const port = 8081;
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server on port ${port}`);
})