const singleCookie = document.cookie.replace("user=", "");

if (singleCookie !== '') {
    fetch(`http://localhost:8081/notifications/${singleCookie}`, { method: "POST" })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
}

