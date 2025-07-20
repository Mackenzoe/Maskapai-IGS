// Toggle Class Active
const NavbarNav = document.querySelector(".navbar-nav");

// Ketika Menu DI Klik
document.querySelector("#menu").onclick = () => {
  NavbarNav.classList.toggle("active");
};

//Klik Untuk Menghilankan NavbarNav
const y = document.querySelector("#menu");

document.addEventListener("click", function (e) {
    if(!y.contains(e.target) && !NavbarNav.contains(e.target)){
        NavbarNav.classList.remove('active');
    }
});
