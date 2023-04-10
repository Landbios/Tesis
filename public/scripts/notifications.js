const singleCookie = document.cookie.replace("user=", "");
if (location.href !== 'http://localhost:8081/notifications') {

}
if (singleCookie !== '') {
    fetch(`http://localhost:8081/notifications/${singleCookie}`, { method: "POST" })
        .then((response) => response.json())
        .then((data) => {
            const container = document.querySelector(".card-container");
            data.map((item, index) => {
                container.innerHTML += `
                <div class=" d-flex mx-5 px-0 notificationcontain align-items-center">
                    <div class="icon-container p-2">
                        <img src="/media/bell-icon.png" class="notification-icon">

                    </div>
                    <div class="notification-message">

                    <h5 class="notification-text my-0 mx-3">${item.mensaje}</h5>
                    
                    </div>

                    
                </div>`;
            });
        })
        // .then(() => {
        //     const setOld = Array.from(document.querySelectorAll(".set-old"));
        //     setOld.map((item) => {
        //         item.addEventListener("click", (e) => {
        //             const id = e.target.id;
        //             fetch(`http://localhost:8081/notifications/change/${id}`, { method: "POST" })
        //                 .then(() => {
        //                     item.parentElement.remove();
        //                     location.reload();
        //                 });
        //         });
        //     });
        // })
        .catch((err) => console.log(err));
}
