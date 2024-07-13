export function checkToken() {

    var currentDate = new Date();
    var currentTime = currentDate.getTime();

    if (window.localStorage.getItem("accessToken") && currentTime < localStorage.getItem("tokenExpiration")) {
        return;
    }

    else if (!window.localStorage.getItem("accessToken")) {
        window.location.href = "/login"
    }

    else if (currentTime > window.localStorage.getItem("tokenExpiration")) {
        window.localStorage.clear()
    }

}