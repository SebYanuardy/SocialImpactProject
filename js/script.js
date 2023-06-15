const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Animation
    hamburger.classList.toggle("toggle");
});

window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset;
  
    var parallaxSections = document.getElementsByClassName('parallax-section');
    for (var i = 0; i < parallaxSections.length; i++) {
      var section = parallaxSections[i];
      var speed = section.getAttribute('data-speed');
      section.style.backgroundPositionY = -scrollTop * speed + 'px';
    }
  });