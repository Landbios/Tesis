const singleCookie = document.cookie.replace("user=", "");
if (location.href !== 'http://localhost:8081/notifications') {

}
if (singleCookie !== '') {
    fetch(`http://localhost:8081/notifications/${singleCookie}`, { method: "POST" })
        .then((response) => response.json())
        .then((data) => {
            const container = document.querySelector(".card-container");
            data.map((item) => {
                container.innerHTML += `<div>${item.mensaje} - <a id='${item.id}' class='set-old'>Hecho</a></div>`;
            });
        })
        .then(() => {
            const setOld = Array.from(document.querySelectorAll(".set-old"));
            setOld.map((item) => {
                item.addEventListener("click", (e) => {
                    const id = e.target.id;
                    fetch(`http://localhost:8081/notifications/change/${id}`, { method: "POST" })
                        .then(() => {
                            item.parentElement.remove();
                            location.reload();
                        });
                });
            });
        })
        .catch((err) => console.log(err));
}
