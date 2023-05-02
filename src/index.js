const mobileNav = document.getElementById("nav-mobile")
const navv = document.getElementById('navv')
const navMobileBtn = document.getElementById("navMobileBtn")


function scrollFunction() {
    let y = window.pageYOffset;
    if (y > 50) {
      navv.classList.add("bg-[#E8EAF6]");
      navMobileBtn.classList.add("text-black")

    } else {
      navv.classList.remove("bg-[#E8EAF6]");
      navMobileBtn.classList.remove('text-black')
    }
  }
  

function navMobile(){
if(mobileNav.classList.contains('hidden')){
    mobileNav.classList.remove("hidden")
}else{
    mobileNav.classList.add("hidden")
}
}