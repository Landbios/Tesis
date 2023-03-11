const favorite = document.querySelector(".favorite");

const getUsernameFromSingleCookieForHeader = (individualCookie) => {
    return individualCookie.replace(/user=/g, "");
}

favorite.href += `/${getUsernameFromSingleCookieForHeader(document.cookie)}`;