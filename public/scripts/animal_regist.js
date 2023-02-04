const cookies = document.cookie;

const user = document.getElementById("usuario");

user.value = cookies.replace(/user=/g, "");

user.addEventListener('input', (e) => {
    user.value = cookies.replace(/user=/g, "");
});

user.addEventListener('change', (e) => {
    user.value = cookies.replace(/user=/g, "");
});

const animal_regist_form = document.getElementById("animal_regist_form");

animal_regist_form.addEventListener('submit', (e) => {
    user.value = cookies.replace(/user=/g, "");
});