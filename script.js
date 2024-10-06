var profilemenu = document.querySelector(".profile-menu");
var body = document.querySelector(".body");
var body1 = document.querySelector(".body1");
var darkBtn = document.getElementById("dark-button");

function profileMenuToggle(){
    profilemenu.classList.toggle("profile-menu-height");
}

function bodyMenuToggle(){
    body.classList.toggle("body-height");
}

// function body1Toggle(){
//     body1.classList.toggle("body1-height");
// }

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-button-on");
    document.body.classList.toggle("dark-theme")

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }

}






if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-button-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-button-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light");
}


let login = document.querySelector('.login');
let create = document.querySelector('.create');
let container = document.querySelector('.container');

login.onclick = function () {
    container.classList.add('signinForm');
}

create.onclick = function () {
    container.classList.remove('signinForm');
}




////// Eye Js ///////////////////////////////////////////// 
var state = false;

function toggle(){

    if(state){
        document.getElementById("password").setAttribute
        ("type","password");
        document.getElementById("eye-wrapper").style.
        boxShadow = '0 0 0 0 #0000';
        document.getElementById("open").style.display = "none";
        document.getElementById("close").style.display = "block";

        state = false;
    }
    else{
        document.getElementById("password").setAttribute
        ("type","text");
        document.getElementById("eye-wrapper").style.
        boxShadow = '0 0 0 285px #0000';
        document.getElementById("open").style.display = "block";
        document.getElementById("close").style.display = "none";

        state = true;
    }
}