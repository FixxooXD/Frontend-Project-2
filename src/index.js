const mobileNav = document.getElementById("nav-mobile")
const navv = document.getElementById('navv');
const navMobileBtn = document.getElementById("navMobileBtn")



function scrollFunction() {
    let y = window.pageYOffset;
    if (y > 50) {
      navv.classList.add("bg-[#F3F4FF]");
      navv.classList.add("shadow-[0_0_15px_0px_rgba(0,0,0,0.3)]")
      navMobileBtn.classList.remove("text-white");
    } else {
      navv.classList.remove("bg-[#F3F4FF]");
      navv.classList.remove("shadow-[0_0_15px_0px_rgba(0,0,0,0.3)]")
      navMobileBtn.classList.add('text-white') 
    }
  }
  

function navMobile(){
if(mobileNav.classList.contains('hidden')){
    mobileNav.classList.remove("hidden")
}else{
    mobileNav.classList.add("hidden")
}
}