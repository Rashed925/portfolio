const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;


/************Scrolling Active Navbar****************/ 

let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu () {
    let len = section.length;
    while(--len && window.scrollY+97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove ('active'));
    menuLi[len].classList.add('active');
} 

activeMenu(); 
window.addEventListener("scroll", activeMenu);


/************Responsive Navbar****************/ 

let menuIcon = document.querySelector("#menu-icon");
let navList = document.querySelector(".navlist");

menuIcon.onclick= ()=> {
    menuIcon.classList.toggle("bx-x");
    navList.classList.toggle("open");
};

window.onscroll= ()=> {
    menuIcon.classList.remove("bx-x");
    navList.classList.remove("open");
};




/************Scroll Animation****************/ 

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }
        else{
            entry.target.classList.remove("show-items");
        }
    });
     
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));

// services section

function animateCounter(id, target) {
  const element = document.getElementById(id);
  let count = 0;
  const speed = 30;

  const update = () => {
    if (count < target) {
      count++;
      element.innerText = count < 10 ? '0' + count : count;
      setTimeout(update, speed);
    } else {
      element.innerText = target < 10 ? '0' + target : target;
    }
  };

  update();
}

function animateAllCounters() {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const speed = 10;

    const update = () => {
      if (count < target) {
        count++;
        counter.innerText = count;
        setTimeout(update, speed);
      } else {
        counter.innerText = target;
      }
    };

    update();
  });
}

window.onload = () => {
  animateCounter("yearsCounter", 8);
  animateCounter("satisfactionCounter", 100);
  animateAllCounters();
};




















