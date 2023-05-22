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

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   // direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   // pagination: {
//   //   el: '.swiper-pagination',
//   // },

  

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });


// setInterval(function () {element.innerHTML += "Hello"}, 1000);

const nextBtn  = document.getElementById('next')


var swiper = new Swiper('.swiper', {
  loop:true,
  // slidesPerView: 2,
  // slidesPerGroup:2,
  spaceBetween: 20,
  // centerSlide: true,
  // fade:true,
  // clickable: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  breakpoints:{
    0:{
      slidesPerView: 1,
    },
    520:{
      slidesPerView: 2,
    },
    950:{
      slidesPerView: 3,
    }
  }
 });

 var swiper2 = new Swiper('.swiper1', {
  loop:true,
  slidesPerView: 2,
  slidesPerGroup:2,
  spaceBetween: 20,
  // centerSlide: true,
  // fade:true,
  // clickable: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  breakpoints:{
    0:{
      slidesPerView: 2,
    },
    520:{
      slidesPerView: 4,
    },
    950:{
      slidesPerView: 6,
    },
  }
 });