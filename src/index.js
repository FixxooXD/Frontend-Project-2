const mobileNav = document.getElementById("nav-mobile");
const navv = document.getElementById('navv');
const hiddenNav = document.getElementById('nav');
const navvDesktop = document.getElementById("navv-desktop");
const navMobileBtn = document.getElementById("navMobileBtn");
const chatInterface = document.getElementById("chatInterface");
const closeBtn = document.getElementById('closeBtn');
const chatOpt = document.getElementById("chatOpt");

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

 chatOpt.addEventListener("click",()=>{
  chatInterface.classList.remove("hidden");
 })

 closeBtn.addEventListener("click",()=>{
     chatInterface.classList.add("hidden");
 })

 const chatInput = document.getElementById("chatIntput");
 const chatEnter = document.getElementById("enter");
 const timeLine = document.getElementById("timeLine")

 chatEnter.addEventListener("click", ()=>{
  var text = chatInput.value ;
  let container = document.createElement("div");
  timeLine.appendChild(container);
  let listItem = document.createElement("div");

// console.log(text)

//    listItem.innerHTML(`<div class="flex w-fit relative mt-4">
//   <div id="right-chat" class="max-w-[50%] h-fit text-xs ml-auto py-1 px-4 bg-[#FFD600] mr-2">${text}</div>
//   <img class="w-8 h-8 rounded-full" src="assets/download.jpg" alt="">
//  </div>`)
//  container.appendChild(listItem);
 })


