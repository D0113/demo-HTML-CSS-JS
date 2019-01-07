var images = document.getElementsByClassName('img');
var index = 0;

setInterval(function () {

    images[index].classList.remove("show");
    images[index].classList.add("hide");

    if (index === 0)
    {
        images[images.length - 1].classList.remove("hide");
    }
    else{
        images[index - 1].classList.remove("hide");
    }

    if (++index < images.length) {
        images[index].classList.add("show");
    }
    else {
        index = 0;
        images[0].classList.add("show");
    }
}, 5000);