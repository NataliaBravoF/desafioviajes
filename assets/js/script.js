
//Scroll navbar y cambio de color a cierto punto//
$(document).scroll(function(){
    const y = $("html").scrollTop();

    y > 300 ? $("nav").assClass("nav-black") : $("nav").removeClass("nav-black")
});
