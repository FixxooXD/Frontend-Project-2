const mobileNav = document.getElementById("nav-mobile")
const navv = document.getElementById('navv');
const hiddenNav = document.getElementById('nav')
const navvDesktop = document.getElementById("navv-desktop")
const navMobileBtn = document.getElementById("navMobileBtn")

// console.log(hiddenNav);

function scrollFunction() {
    let y = window.pageYOffset;
    if (y > 50) {
      navv.classList.add("bg-[#F3F4FF]");
      navvDesktop.classList.add("bg-[#F3F4FF]");
      navv.classList.add("shadow-[0_0_15px_0px_rgba(0,0,0,0.3)]")
      navvDesktop.classList.add("shadow-[0_0_15px_0px_rgba(0,0,0,0.3)]")
      navMobileBtn.classList.remove("text-white");
    } else {
      navv.classList.remove("bg-[#F3F4FF]");
      navvDesktop.classList.remove("bg-[#F3F4FF]");
      navv.classList.remove("shadow-[0_0_15px_0px_rgba(0,0,0,0.3)]")
      navvDesktop.classList.remove("shadow-[0_0_15px_0px_rgba(0,0,0,0.3)]")
      navMobileBtn.classList.add('text-white') 
    }
  }
  

function navMobile(){
if(hiddenNav.classList.contains('hidden')){
  hiddenNav.classList.remove("hidden")
}else{
  hiddenNav.classList.add("hidden")
}
}


// var elem = document.querySelector('.main-carousel');
// var flkty = new Flickity( elem, {
//   // options
//   cellAlign: 'left',
//   contain: true
// });

// // element argument can be a selector string
// //   for an individual element
// var flkty = new Flickity( '.main-carousel', {
//   // options
// });