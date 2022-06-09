import "./department";
//import "./doctor";
import "./livechat.svg";
import "./whatsapp.svg";
import "./location.svg";
import "./hero.webp";
import "./style.css";
import "./navbar.css";

window.onscroll = function () {
  myFunction();
};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
