var Infomation = document.getElementsByClassName("aniInfo");

function showInfo1(){
    console.log("ok");
    Infomation[0].style.display = "block";
}
function showInfo2(){
    console.log("ok");
    Infomation[1].style.display = "block";
}
function showInfo3(){
    console.log("ok");
    Infomation[2].style.display = "block";
}
function showInfo4(){
    console.log("ok");
    Infomation[3].style.display = "block";
}
function showInfo5(){
    console.log("ok");
    Infomation[4].style.display = "block";
}
function showInfo6(){
    console.log("ok");
    Infomation[5].style.display = "block";
}
function showInfo7(){
    console.log("ok");
    Infomation[6].style.display = "block";
}

function closeInfo(){
    console.log("ok")
    for(let i=0;i<Infomation.length;i++){
        Infomation[i].style.display = "none";
    }
}