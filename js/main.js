// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

// creating a pop-up for user
let rps = document.getElementById("rpsDiv");
rps.onclick = function(e){
    e.preventDefault();
    window.open ("https://brianramaswami.github.io/RPS-Multiplayer/","game1","menubar=1,resizable=1,width=400,height=825");
    console.log("window 1.");
    setTimeout(() => {
    window.open ("https://brianramaswami.github.io/RPS-Multiplayer/","game2","menubar=1,resizable=1,width=400,height=825,left=500"), 6000
    });
    console.log("window 2.")
}

let rps1 = document.getElementById("rpsDiv1");
rps1.onclick = function(e){
    e.preventDefault();
    window.open ("https://brianramaswami.github.io/RPS-Multiplayer/","game1","menubar=1,resizable=1,width=400,height=825");
    console.log("window 1.");
    setTimeout(() => {
    window.open ("https://brianramaswami.github.io/RPS-Multiplayer/","game2","menubar=1,resizable=1,width=400,height=825,left=500"), 6000
    });
    console.log("window 2.")
}
