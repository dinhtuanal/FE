// When the user scrolls down 0px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("header").style.position = "fixed";
        document.getElementById("navbar").style.padding = "0px 10px 5px";

    } else {
        document.getElementById("header").style.position = "static";
        document.getElementById("navbar").style.padding = "10px 10px";
        document.getElementById("navbar").style.backgroundColor = "#790e8b";
        
        document.getElementById("sub-menu").style.backgroundColor = "#790e8b";
    }
}


new WOW().init();