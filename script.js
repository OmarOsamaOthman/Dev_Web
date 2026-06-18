
let upButton = document.getElementsByClassName("scrole-up")[0];
window.onscroll = function () {
    if (window.scrollY >= 560) {
        upButton.classList.add("show");

    }
    else {
        upButton.classList.remove("show");
    }

    upButton.addEventListener("click", function () {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth",
        })
    })
}