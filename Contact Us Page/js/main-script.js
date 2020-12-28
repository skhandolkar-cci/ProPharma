
function closeIconToggle(x) {
  x.classList.toggle("change");
}

function navScroll(ele) { 
    var sectionTo = ele.getAttribute('href');
    $('html, body').animate({
    scrollTop: $(sectionTo).offset().top
    }, 1500);
}