const username = location.href.replace("http://localhost:8081/usuario/", "");
const profileImagePath = `/media/profilemedia/${username}_profimage.jpg`;

fetch(`http://localhost:8081/${profileImagePath}`)
    .then((response) => response.status)
    .then((data) => {
        const profileImageElement = document.querySelector(".profimage");
        if (data !== 200) {
            profileImageElement.src = `/media/profilemedia/_profimage.jpg`;
            return;
        }
        profileImageElement.src = profileImagePath;
        return;
    });

const genderTo1Char = (char) => {
    if (char === 'm') return "Hombre";
    if (char === 'f') return "Mujer";
    return "Indefinido";
};

fetch(`http://localhost:8081/usuario/${username}`, { method: "POST" })
    .then((response) => response.json())
    .then((userInformation) => {
        const profileName = document.querySelector(".profilename");
        const profileUsername = document.querySelector(".username");
        const profilemail = document.querySelector(".profilemail");
        const profileRealName = document.querySelector(".profile-real-name");
        const profileLastName = document.querySelector(".profile-lastname");
        const profileTlf = document.querySelector(".profile-tlf");
        const profileGender = document.querySelector(".profile-gender");
        const profileAge = document.querySelector(".profile-age");
        const profileAddress = document.querySelector(".profile-address");

        profileName.innerHTML = userInformation.usuario;
        profilemail.innerHTML = userInformation.email;
        profileRealName.value = userInformation.nombre;
        profileLastName.value = userInformation.apellido;
        profileTlf.value = userInformation.telefono;
        profileGender.innerHTML = genderTo1Char(userInformation.genero);
        profileAge.value = userInformation.fecha_nacimiento.replace("T04:00:00.000Z", "");
        profileAddress.value = userInformation.sector;

        if (userInformation.usuario !== profileUsername.innerHTML.trim()) {
            profilemail.remove();
        }
    });