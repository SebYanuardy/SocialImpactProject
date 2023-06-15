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
  
    // Add event listeners to the buttons
    page1Button.addEventListener("click", function() {
      page1Section.scrollIntoView({ behavior: "smooth" });
    });
  
    page2Button.addEventListener("click", function() {
      page2Section.scrollIntoView({ behavior: "smooth" });
    });
  
    page3Button.addEventListener("click", function() {
      page3Section.scrollIntoView({ behavior: "smooth" });
    });
  
    page4Button.addEventListener("click", function() {
      page4Section.scrollIntoView({ behavior: "smooth" });
    });
  
    // Function to check if an element is in the viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
  
    // Function to update the active state of the sidebar buttons
    const updateActiveButton = () => {
      sections.forEach((section, index) => {
        const button = sidebarButtons[index];
        if (isInViewport(section)) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      });
    };
  
    // Get all the section elements and sidebar buttons
    const sections = document.querySelectorAll('section');
    const sidebarButtons = document.querySelectorAll('.sidebar-button');
  
    // Add scroll event listener to update the active button on scroll
    window.addEventListener('scroll', updateActiveButton);
  });
  