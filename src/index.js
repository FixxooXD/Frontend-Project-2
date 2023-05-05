const mobileNav = document.getElementById("nav-mobile")
const navv = document.getElementById('navv');
const navMobileBtn = document.getElementById("navMobileBtn")




function scrollFunction() {
    let y = window.pageYOffset;
    if (y > 50) {
      navv.classList.add("bg-[#E8EAF6]");
      navv.style.boxShadow ="rgba(0, 0, 0, 0.3) 0px 0px 15px 0px;"
      navMobileBtn.classList.remove("text-white");
    } else {
      navv.classList.remove("bg-[#E8EAF6]");
      // navv.classList.remove("shadow-2xl");
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