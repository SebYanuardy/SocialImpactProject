document.addEventListener("DOMContentLoaded", function() {
  // Get the buttons
  var page1Button = document.getElementById("page1-button");
  var page2Button = document.getElementById("page2-button");
  var page3Button = document.getElementById("page3-button");
  var page4Button = document.getElementById("page4-button");

  // Get the sections
  var page1Section = document.querySelector(".page1");
  var page2Section = document.querySelector(".page2");
  var page3Section = document.querySelector(".page3");
  var page4Section = document.querySelector(".page4");

  // Create an Intersection Observer instance
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        // Get the ID of the intersecting section
        var sectionId = entry.target.id;

        // Update the active button based on the section ID
        updateActiveButton(sectionId);
      }
    });
  }, { threshold: 0.5 }); // Adjust the threshold as needed

  // Observe the sections
  observer.observe(page1Section);
  observer.observe(page2Section);
  observer.observe(page3Section);
  observer.observe(page4Section);

  // Function to update the active state of the sidebar buttons
  const updateActiveButton = (activeSectionId) => {
    var sidebarButtons = document.querySelectorAll('.sidebar-button');

    sidebarButtons.forEach(function(button) {
      var buttonSectionId = button.getAttribute('href').substring(1);
      if (buttonSectionId === activeSectionId) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  };

  

  learnmore.addEventListener('click',function(event) {
    event.preventDefault();
    page2Section.scrollIntoView({ behavior: "smooth" });
  })
  serve.addEventListener('click', function(event) {
    event.preventDefault();
    page3Section.scrollIntoView({ behavior: "smooth" });
  })
  
  // Add event listeners to the buttons
  page1Button.addEventListener("click", function(event) {
    event.preventDefault();
    page1Section.scrollIntoView({ behavior: "smooth" });
  });

  page2Button.addEventListener("click", function(event) {
    event.preventDefault();
    page2Section.scrollIntoView({ behavior: "smooth" });
  });

  page3Button.addEventListener("click", function(event) {
    event.preventDefault();
    page3Section.scrollIntoView({ behavior: "smooth" });
  });

  page4Button.addEventListener("click", function(event) {
    event.preventDefault();
    page4Section.scrollIntoView({ behavior: "smooth" });
  });
});
