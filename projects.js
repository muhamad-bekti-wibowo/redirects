$(document).ready(function () {
    console.log(window.location.href);
    if (window.location.href != "https://muhamad-bekti-wibowo.blogspot.com/"||window.location.href != "https://muhamad-bekti-wibowo.blogspot.com/?m=1") {
        document.getElementById("NavLink").style.height = "0%"; console.log(window.location.href);
    } else {
        $(".body").css("display", "none");
         console.log("display None"); console.log(window.location.href);
        $.get("https://api.onedrive.com/v1.0/shares/s!AuOxR9BjfloLg5Ndgy8eqXEPchy4YQ/root/content", function (data, status) {
            document.getElementById("Projects").href = data;
        });
        
    }
});
function closeNav() {
    console.log("displayblock");
    $(".body").css("display", "block");
    document.getElementById("NavLink").style.height = "0%";
}
