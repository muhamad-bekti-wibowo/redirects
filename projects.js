$(document).ready(function () {
    console.log(window.location.href);
    if (window.location.href = "https://muhamad-bekti-wibowo.blogspot.com/") {
        document.getElementById("NavLink").style.height = "0%";
    } else {
        $("body").css("display", "none");
        $.get("https://api.onedrive.com/v1.0/shares/s!AuOxR9BjfloLg5Ndgy8eqXEPchy4YQ/root/content", function (data, status) {
            document.getElementById("Projects").href = data;
        });
        
    }
});
function closeNav() {
    $("body").css("display", "block");
    document.getElementById("NavLink").style.height = "0%";
}
