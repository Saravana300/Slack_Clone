const navbar = document.querySelector('.superclass');
let top = navbar.offsetTop;
function show() {
  if (window.scrollY >= top) {    
    document.getElementsByClassName(".scrollnb").style.visibility="block";
  } else {
    navbar.classList.remove('sticky');
  }
}
window.addEventListener('scroll', show);



