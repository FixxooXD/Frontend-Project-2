const mobileNav = document.getElementById("nav-mobile")
const navv = document.getElementById('navv');
const navMobileBtn = document.getElementById("navMobileBtn")



// background: rgb(243, 244, 255);
//  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 15px 0px;



function scrollFunction() {
    let y = window.pageYOffset;
    if (y > 50) {
      navv.classList.add("bg-[#E8EAF6]");
      navv.classList.add("shadow-[0_0_15px_0px_rgba(0,0,0,0.3)]")
      navMobileBtn.classList.remove("text-white");
    } else {
      navv.classList.remove("bg-[#E8EAF6]");
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