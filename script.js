// script.js
document.addEventListener("DOMContentLoaded", function () {
    var agendarBtn = document.getElementById("agendarBtn");
    var popup = document.getElementById("agendamentoPopup");
    var closeBtn = document.querySelector(".close");

    agendarBtn.addEventListener("click", function () {
        popup.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    });
});
