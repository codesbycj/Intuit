const hamburgerActive = document.querySelector(".hamburger");
const hamburgerUnActive = document.querySelector(".closeburger");
const navBtn = document.querySelector(".navbar-toggler");
const variableBurger = document.querySelector(".jsBurger");
const discount = document.getElementById('discount');
const seperator = document.querySelector('.seperator')

setTimeout(() => {
    discount.style.display = 'block';
    seperator.style.display = 'block';
}, 1000);

console.log(typeof hamburgerActive);

navBtn.addEventListener("click", () => {
        discount.style.display = 'fixed';

  if (hamburgerActive.classList.contains('jsBurger')) {
    hamburgerActive.classList.remove("jsBurger");
    hamburgerActive.classList.add("navUnactive");
    hamburgerUnActive.classList.remove("navUnactive");
    console.log(navBtn.innerHTML);
  } else if (!hamburgerActive.classList.contains('.jsBurger')) {
    hamburgerActive.classList.add("jsBurger");
    hamburgerActive.classList.add("hamburger");
    hamburgerActive.classList.remove("navUnactive");
    hamburgerUnActive.classList.add("navUnactive");
    console.log(navBtn.innerHTML);
  }
});
