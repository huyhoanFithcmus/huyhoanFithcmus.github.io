function darkmode()
{
    // darkmode pageY
    var h1Elements = document.getElementsByClassName("l-header");

    for(var i = 0; i < h1Elements.length; i++) {
    h1Elements[i].style.backgroundColor = "#322E2E";
    }

    var navlink = document.getElementsByClassName("nav__link");

    for(var i = 0; i < navlink.length; i++) {
        navlink[i].style.color = "white";
    }

    var navlink = document.getElementsByClassName("nav__logo");

    for(var i = 0; i < navlink.length; i++) {
        navlink[i].style.color = "white";
    }


    var bx = document.getElementsByClassName("bx");

    for(var i = 0; i < bx.length; i++) {
        bx[i].style.color = "white";
    }

    var h1Elements = document.getElementsByTagName("h1");

    for(var i = 0; i < h1Elements.length; i++) {
    h1Elements[i].style.color = "white";
    }

    var h1Elements = document.getElementsByTagName("h2");

    for(var i = 0; i < h1Elements.length; i++) {
    h1Elements[i].style.color = "white";
    }

    var h1Elements = document.getElementsByTagName("p");

    for(var i = 0; i < h1Elements.length; i++) {
    h1Elements[i].style.color = "white";
    }

    var h1Elements = document.getElementsByTagName("span");

    for(var i = 0; i < h1Elements.length; i++) {
    h1Elements[i].style.color = "white";
    }

    var h1Elements = document.getElementsByClassName("skills__data");

    for(var i = 0; i < h1Elements.length; i++) {
    h1Elements[i].style.backgroundColor = "#449744";
    }

    var darkbutton = document.getElementsByClassName("dark");

    for(var i = 0; i < darkbutton.length; i++) {
        darkbutton[i].style.backgroundColor = "black";
    }


    var h1Elements = document.getElementsByClassName("l-main");

    for(var i = 0; i < h1Elements.length; i++) {
    h1Elements[i].style.backgroundColor = "black";
    }
}
