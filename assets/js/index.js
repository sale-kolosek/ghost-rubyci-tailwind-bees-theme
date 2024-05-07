import darkMode from './darkMode';

darkMode.init();


document.body.addEventListener('click', (e)=>{
    const clickFields = document.querySelectorAll('.click-field')
    if(clickFields){
        clickFields.forEach((field)=>{
            if(!field.contains(e.target)){
                const fieldToggle = field.querySelectorAll(`[data-show]`)
                fieldToggle.forEach((f)=>{
                    f.setAttribute('data-show', false)
                })
            }
        })
    }
})

window.onscroll = () => {
    const progressBar = document.querySelector(".progress-bar")
    const progressBarSvg = document.querySelector(".progress-svg")
    if(progressBar) progressBar.classList.remove('hidden')
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    if(progressBar) progressBar.style.width = scrolled + "%";
    if(progressBarSvg) progressBarSvg.style.strokeDashoffset = 100 - scrolled
}

// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

$(document).ready(function() {
  // handle lg nav dropdown item
  const productButton = document.getElementById('productButton');
  const flyoutMenu = document.getElementById('flyoutMenu');
  let isMenuVisible = false;

  productButton.addEventListener('click', () => {
    isMenuVisible = !isMenuVisible;
    if (isMenuVisible) {
      flyoutMenu.classList.remove('hidden', 'opacity-0', 'translate-y-1');
      flyoutMenu.classList.add('opacity-100', 'translate-y-0');
    } else {
      flyoutMenu.classList.remove('opacity-100', 'translate-y-0');
      flyoutMenu.classList.add('opacity-0', 'translate-y-1');
      setTimeout(() => {
        flyoutMenu.classList.add('hidden');
      }, 150); // Match the duration of the leaving transition
    }
  });

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!productButton.contains(event.target) && !flyoutMenu.contains(event.target)) {
        isMenuVisible = false;
        flyoutMenu.classList.remove('opacity-100', 'translate-y-0');
        flyoutMenu.classList.add('opacity-0', 'translate-y-1');
        setTimeout(() => {
          flyoutMenu.classList.add('hidden');
        }, 150); // Match the duration of the leaving transition
    }
    if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
      isMobileMenuVisible = false;
      mobileMenu.classList.add('hidden');
    }
  }

  // handle mobile show/hide menu
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMobileMenu = document.getElementById('closeMobileMenu');
  let isMobileMenuVisible = false;

  mobileMenuButton.addEventListener('click', () => {
      isMobileMenuVisible = !isMobileMenuVisible;
      mobileMenu.classList.toggle('hidden');
  });
  closeMobileMenu.addEventListener('click', () => {
    isMobileMenuVisible = false;
    mobileMenu.classList.add('hidden');
  });

  // handle submenu mobile
  const productSubMenuButton = document.getElementById('productSubMenuButton');
  const productSubMenuIcon = document.getElementById('productSubMenuIcon');
  const disclosure1 = document.getElementById('disclosure-1');
  let isSubMenuVisible = false;

  productSubMenuButton.addEventListener('click', () => {
      isSubMenuVisible = !isSubMenuVisible;
      if (isSubMenuVisible) {
        disclosure1.classList.remove('hidden');
        productSubMenuIcon.classList.add('rotate-180');
      } else {
        disclosure1.classList.add('hidden');
        productSubMenuIcon.classList.remove('rotate-180');
      }
  });
});
