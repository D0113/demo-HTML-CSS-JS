var input = document.getElementsByClassName('inp');


for (var item of input) {
    item.addEventListener("focus", function (event) {
        event.path[2].classList.add('inp-focus');
    });

    item.addEventListener("focusout", function (event) {
        event.path[2].classList.remove('inp-focus');
    });

    item.addEventListener("keypress", function (event) {
        event.path[1].classList.add('fc');
    });
    item.addEventListener("keyup", function (event) {
        if (event.path[0].value === '') {
            event.path[1].classList.remove('fc');
        }
    });
}



