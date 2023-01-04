var mauseOn = document.getElementsByClassName("openAll");
var subMenu = document.getElementsByClassName("submenu_list");
var subMenuOn = document.getElementsByClassName("gnb_depth");

function hoverOn(e) {
    return function () {
        console.log("ok1");
        subMenu[e].style.display= "block";
    }
}

function hoverOut(e) {
    return function () {
        console.log("ok2");
        subMenu[e].style.display= "none";
    }
}

mauseOn[0].addEventListener("mouseover", hoverOn(0));
subMenuOn[0].addEventListener("mouseover", hoverOn(0));
mauseOn[0].addEventListener("mouseout", hoverOut(0));
subMenuOn[0].addEventListener("mouseout", hoverOut(0));

mauseOn[1].addEventListener("mouseover", hoverOn(1));
subMenuOn[1].addEventListener("mouseover", hoverOn(1));
mauseOn[1].addEventListener("mouseout", hoverOut(1));
subMenuOn[1].addEventListener("mouseout", hoverOut(1));

mauseOn[2].addEventListener("mouseover", hoverOn(2));
subMenuOn[2].addEventListener("mouseover", hoverOn(2));
mauseOn[2].addEventListener("mouseout", hoverOut(2));
subMenuOn[2].addEventListener("mouseout", hoverOut(2));

mauseOn[3].addEventListener("mouseover", hoverOn(3));
subMenuOn[3].addEventListener("mouseover", hoverOn(3));
mauseOn[3].addEventListener("mouseout", hoverOut(3));
subMenuOn[3].addEventListener("mouseout", hoverOut(3));