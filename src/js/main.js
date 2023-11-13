

//REVEAL ELEMENTS 
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

function revealLeft() {
    var revealsLeft = document.querySelectorAll(".revealleft");

    for (var i = 0; i < revealsLeft.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealsLeft[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealsLeft[i].classList.add("active");
        } else {
            revealsLeft[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", revealLeft);

function revealRight() {
    var revealsRight = document.querySelectorAll(".revealright");

    for (var i = 0; i < revealsRight.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealsRight[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealsRight[i].classList.add("active");
        } else {
            revealsRight[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", revealRight);
