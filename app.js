
const downBtn = document.querySelector('#down-btn');
const secondPage = document.querySelector('.second-page')
const wrapper = document.querySelector('.wrapper')
const navbar = document.querySelector('nav')
const homeBtn = document.getElementById('home-btn')
const aboutBtn = document.getElementById('about-btn')
const projectsBtn = document.getElementById('projects-btn')
const navButtons = document.querySelectorAll('.nav-btn')
const pageFour = document.querySelector('.page-4')



document.addEventListener('DOMContentLoaded', function () {
    const spans = document.querySelectorAll('span');
    spans.forEach((span, index) => {
      setTimeout(() => {
        span.style.animationDelay = `${index * 0.1}s`;
      }, 0);
    });
  });

  
  function handleIntersection(entries, className) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
      }
    });
  }

  const leftObserver = new IntersectionObserver((entries) => {
    handleIntersection(entries, "show-left");
  });

  const rightObserver = new IntersectionObserver((entries) => {
    handleIntersection(entries, "show-right");
  });

  const hiddenLeft = document.getElementById("about-section");
  leftObserver.observe(hiddenLeft);

  const hiddenRight = document.querySelector('.hidden-right');
  rightObserver.observe(hiddenRight);


  let scrollPoint = 1000;
  wrapper.addEventListener('scroll', () => {


   if(wrapper.scrollTop > scrollPoint) {
    navbar.classList.add('nav-visible');

   } else {
    navbar.classList.remove('nav-visible')
   }
  })




 // scro
  document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-btn');

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            const section = document.getElementById(sectionId);

            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
