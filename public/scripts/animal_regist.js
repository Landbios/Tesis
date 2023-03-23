const cookies = document.cookie;

const user = document.getElementById("usuario");
const name = document.getElementById("animal_name");
const descripcion = document.getElementById("regist_user");
const raza = document.getElementById("animal_race");

user.value = cookies.replace(/user=/g, "");

user.addEventListener('input', (e) => {
    user.value = cookies.replace(/user=/g, "");
});

user.addEventListener('change', (e) => {
    user.value = cookies.replace(/user=/g, "");
});

const animal_regist_form = document.getElementById("animal_regist_form");
/*
 * When form submitted animal registered value will 
 * be that of the one stored on cookie; if cookie has 
 * more than 2 values then it will fail or store something erroneous*/
    animal_regist_form.addEventListener('submit', (e) => {
    user.value = cookies.replace(/user=/g, "");
});

name.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[0-9!"_*$#%&/=()¿?\\¨{}\[\]:;,\^`-]/g, "");
});

descripcion.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/[_\[\]{}¨\*\+~=$#<>]/g, "");
});

raza.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[0-9!"$#%&/\*\+=()¿?\\¨{}\[\]:;,\^`-]/g, "");
});