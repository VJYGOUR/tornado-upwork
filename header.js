const burger = document.querySelector(".burger")
const burgerImg = document.querySelector(".burger img")
const main = document.querySelector(".main-container")
const menu = document.querySelector(".mobile-menu")
var buttons = document.querySelectorAll(".btnn-1");
var divs = document.querySelectorAll(".cont-btn");
var allActive = document.querySelectorAll(".all-active");
var alldivv = document.querySelectorAll(".all-divv");
var allbtnn = document.querySelectorAll(".all-btnn");
var btall = document.querySelectorAll(".btall");
var imgs = document.querySelector(".imgs");
var allimgs = document.querySelectorAll(".all-imgs");
var countriesimgs = document.querySelector(".countriesimgs");
var divimagemain = document.getElementById("divimagemain");
var x = document.querySelectorAll(".imgs-div");

divimagemain.addEventListener("click", function () {
  countriesimgs.classList.toggle("hiddenn");
});
//
x.forEach(function (curr, i) {
  curr.addEventListener("click", function () {
    imghandler(i);
  });
});
//
function imghandler(i) {
  allimgs.forEach(function (imgg, index) {
    if (i === index) {
      let myimg = imgg.src;
      imgs.src = myimg;
      countriesimgs.classList.add("hiddenn");
      addcl(index);
    }
  });
}
// --------------------------------------------------------------------
// allimgs.forEach(function (imgg, index) {
//   imgg.addEventListener("click", function () {
//     let myimg = imgg.src;
//     imgs.src = myimg;
//     countriesimgs.style.display = "none";
//     addcl(index);
//   });
// });
//
//
function addcl(index) {
  x.forEach(function (curr, i) {
    if (index === i) {
      curr.classList.add("imgs-background");
    } else {
      curr.classList.remove("imgs-background");
    }
  });
}
//
//
allbtnn.forEach(function (button, index) {
  button.addEventListener("click", function () {
    showD(index);
  });
});
function showD(indexToShow) {
  btall.forEach(function (bt, index) {
    if (index === indexToShow) {
      bt.classList.add("btall");
      bt.classList.remove("bttfade");
    } else {
      bt.classList.remove("btall");
      bt.classList.add("bttfade");
    }
  });
}
allbtnn.forEach(function (button, index) {
  button.addEventListener("click", function () {
    showDi(index);
  });
});

function showDi(indexToShow) {
  alldivv.forEach(function (div, index) {
    if (index === indexToShow) {
      div.classList.add("hiddenn");
    } else {
      div.classList.remove("hiddenn");
    }
  });
}
buttons.forEach(function (button, index) {
  console.log(index);
  button.addEventListener("click", function () {
    showDiv(index);
  });
});

function showDiv(indexToShow) {
  divs.forEach(function (div, index) {
    if (index === indexToShow) {
      div.classList.remove("hiddenn");
    } else {
      div.classList.add("hiddenn");
    }
  });
}
buttons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    showDiv(index);
    // Remove underline from all buttons
    buttons.forEach(function (button) {
      button.classList.remove("btnn-1-main");
    });

    // Add underline to the clicked button
    button.classList.add("btnn-1-main");
  });
});
allActive.forEach(function (button, index) {
  button.addEventListener("click", function () {
    showDiv(index);
    // Remove underline from all buttons
    allActive.forEach(function (button) {
      button.classList.remove("btnn-1-main");
    });
    // Add underline to the clicked button
    button.classList.add("btnn-1-main");
  });
});


const icons = [`<img src="img/eth.svg">`, `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path
    d="M5.50426 7.56374L9 4.068L12.4974 7.56526L14.5314 5.53126L9 0L3.4704 5.5296L5.50433 7.5636L5.50426 7.56374ZM0 9L2.03407 6.96564L4.068 8.99957L2.03393 11.0336L0 9ZM5.50426 10.4365L9 13.932L12.4973 10.4348L14.5324 12.4677L14.5314 12.4688L9 18L3.4704 12.4704L3.46752 12.4675L5.50447 10.4363L5.50426 10.4365ZM13.932 9.00086L15.9661 6.96679L18 9.00072L15.966 11.0348L13.932 9.00086Z"
    fill="#44F1A6" />
<path
    d="M11.0629 8.99895H11.0638L9 6.935L7.47454 8.46003L7.29929 8.63535L6.93785 8.99686L6.93497 8.99967L6.93785 9.00262L9 11.0651L11.064 9.00111L11.065 8.99996L11.0631 8.99895"
    fill="#44F1A6" />
</svg>`, `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
viewBox="0 0 121.2 104.1">
<defs>
    <clipPath id="a" transform="translate(-3.7 -10)">
        <rect x="1.7" width="125" height="125" fill="none" />
    </clipPath>
</defs>
<g clip-path="url(#a)">
    <path
        d="M95.1,41.8a7.9,7.9,0,0,0-7.6,0L70.1,51.9,58.2,58.5,40.8,68.6a7.9,7.9,0,0,1-7.6,0L19.3,60.7a7.6,7.6,0,0,1-3.8-6.4V38.7a7.2,7.2,0,0,1,3.8-6.4L33,24.6a7.9,7.9,0,0,1,7.6,0l13.6,7.7A7.7,7.7,0,0,1,58,38.7V48.8L69.9,42V31.9a7.4,7.4,0,0,0-3.8-6.4L40.8,11a7.9,7.9,0,0,0-7.6,0L7.5,25.5a7,7,0,0,0-3.8,6.4V61.1a6.9,6.9,0,0,0,3.8,6.4L33.2,82a7.4,7.4,0,0,0,7.6,0l17.4-9.9,11.9-6.8,17.4-9.9a7.9,7.9,0,0,1,7.6,0l13.7,7.7a7.7,7.7,0,0,1,3.8,6.4V85.1a7.2,7.2,0,0,1-3.8,6.4L95.1,99.4a7.9,7.9,0,0,1-7.6,0L73.9,91.7a7.6,7.6,0,0,1-3.8-6.4V75.2L58.2,82V92.2A7.2,7.2,0,0,0,62,98.5l25.8,14.6a7.9,7.9,0,0,0,7.6,0l25.7-14.6a7.5,7.5,0,0,0,3.8-6.3V62.9a7.4,7.4,0,0,0-3.8-6.4Z"
        transform="translate(-3.7 -10)" fill="#94febf" />
</g>
</svg>`, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
<path fill="#94febf" fill-rule="evenodd" clip-rule="evenodd"
    d="M2.5,21.2c1,0.8,2.4,1.1,4,1.1c2,0,3.5-0.5,4.7-1.4c1.2-0.9,2-2.3,2.5-4.2  c0.3-1.1,0.5-2.3,0.7-3.5c0.1-0.4,0.1-0.8,0.1-1.1c0-1-0.2-1.8-0.7-2.5c-0.5-0.7-1.1-1.2-2-1.6C11,7.8,10.1,7.6,9,7.6  c-3.9,0-6.3,1.9-7.2,5.6c-0.3,1.4-0.6,2.6-0.8,3.5C1,17.2,1,17.6,1,17.9C1,19.3,1.5,20.5,2.5,21.2z M8.7,18.8  c-0.5,0.5-1.2,0.7-1.9,0.7c-1.3,0-2-0.6-2-1.9c0-0.3,0-0.6,0.1-0.9c0.2-1.3,0.5-2.4,0.7-3.4c0.2-0.9,0.6-1.6,1.1-2.1  c0.5-0.5,1.2-0.7,2-0.7c1.3,0,1.9,0.6,1.9,1.9c0,0.3,0,0.6-0.1,0.9c-0.2,1-0.4,2.1-0.7,3.4C9.7,17.6,9.3,18.3,8.7,18.8z M15.1,22  c0.1,0.1,0.2,0.1,0.3,0.1h2.8c0.1,0,0.3,0,0.4-0.1c0.1-0.1,0.2-0.2,0.2-0.4l0.9-4.5h2.8c1.8,0,3.2-0.4,4.2-1.1  c1-0.8,1.7-1.9,2.1-3.5c0.1-0.4,0.1-0.7,0.1-1.1c0-1.2-0.5-2.1-1.4-2.7c-0.9-0.6-2.1-0.9-3.7-0.9h-5.5c-0.1,0-0.3,0-0.4,0.1  c-0.1,0.1-0.2,0.2-0.2,0.4l-2.8,13.3C15.1,21.8,15.1,21.9,15.1,22z M24.3,13.9c-0.4,0.3-0.9,0.5-1.5,0.5h-2.4l0.8-3.7h2.5  c0.6,0,1,0.1,1.2,0.3c0.2,0.2,0.3,0.5,0.3,0.9c0,0.2,0,0.4-0.1,0.6C25,13.1,24.7,13.6,24.3,13.9z" />
</svg>`, `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd"
    d="M0 4.99595V13.0041C0 13.3322 0.176285 13.6357 0.462898 13.8009L7.53086 17.8747C7.82082 18.0418 8.17919 18.0418 8.46914 17.8747L15.5371 13.8009C15.8237 13.6357 16 13.3322 16 13.0041V4.99595C16 4.66775 15.8237 4.36429 15.5371 4.1991L8.46914 0.125341C8.17919 -0.0417807 7.82081 -0.0417802 7.53086 0.125342L0.462898 4.1991C0.176284 4.36429 0 4.66775 0 4.99595ZM7.76491 1.22044L1.3183 4.94719C1.17529 5.02987 1.08738 5.18143 1.08738 5.34532V11.4621L4.43993 5.9761C4.72129 5.5157 5.22546 5.23438 5.76923 5.23438H7.68932L2.4151 13.6869L2.98792 14.018L8.38835 5.23438H11.0291L5.10898 15.2442L7.76491 16.7796C7.91015 16.8635 8.08985 16.8635 8.23509 16.7796L10.5917 15.4172L8.07767 11.6129L9.5534 9.07684L12.8316 14.1224L13.4174 13.7837L10.0971 8.30835L11.3398 6.07972L14.9126 11.2783V5.34532C14.9126 5.18143 14.8247 5.02987 14.6817 4.94719L8.2351 1.22044C8.08985 1.13647 7.91015 1.13647 7.76491 1.22044Z"
    fill="#44F1A6" />
</svg>`, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000">
<g fill="#94febf">
    <path
        d="m1809.4 500l-73.6 73.6c58.5 92 76.9 207.4 36.8 317.7-66.9 187.3-274.2 286-463.2 219.1-26.8-10-51.8-21.7-73.6-36.8l-235.8 235.8-205.7-207.4c-95.3 63.5-217.4 81.9-332.8 41.8-194-70.2-294.3-282.6-224.1-474.9 10-30.1 25.1-56.9 41.8-81.9l-88.6-88.6-16.7 28.4c-92 150.5-142.1 324.4-142.1 503.3-1.7 533.4 433.1 969.9 966.5 969.9h1.7c533.4 0 966.6-433.1 968.2-966.6 0-177.3-48.5-351.2-140.5-503.3l-18.3-30.1" />
    <path
        d="m388 695.7c-25.1 33.4-40.1 75.3-40.1 120.4 0 108.7 88.6 197.3 197.3 197.3 45.2 0 87-15.1 120.4-41.8l-277.6-275.9" />
    <path
        d="m1356.2 954.8c31.8 21.7 68.6 33.4 110.4 33.4 108.7 0 197.3-88.6 197.3-197.3 0-40.1-11.7-78.6-33.4-110.4l-274.3 274.3" />
    <path
        d="m1003.3 1162.2l-799.3-802.7 31.8-33.4c197.3-209 466.5-326.1 755.8-326.1h1.7c292.6 0 573.6 125.4 769.2 342.8l30.1 33.4-789.3 786m-668.8-802.7l668.9 670.6 660.5-657.2c-177.3-177.2-418.1-279.3-668.9-279.3h-1.7c-249.2 0-481.6 93.7-658.8 265.9" />
</g>
</svg>`, ` <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="#94febf">
<path
    d="M13.5032 9.81773C13.9433 9.05868 14.6535 9.05868 15.0936 9.81773L17.8343 14.6217C18.2744 15.3808 17.9143 16 17.0341 16H11.5127C10.6425 16 10.2824 15.3808 10.7125 14.6217L13.5032 9.81773ZM8.20189 0.569288C8.642 -0.189763 9.34217 -0.189763 9.78228 0.569288L10.3924 1.66792L11.8328 4.19476C12.1829 4.91386 12.1829 5.7628 11.8328 6.4819L7.0016 14.8414C6.56149 15.5206 5.83131 15.9501 5.02111 16H1.01013C0.12991 16 -0.230178 15.3908 0.20993 14.6217L8.20189 0.569288Z"
    fill="#94febf" />
</svg>`, `<svg xmlns="http://www.w3.org/2000/svg" fill="#94febf" viewBox="0 0 18 19">
<path fill="#94febf"
    d="M4.908 14.417a4.556 4.556 0 01-1.879-.4 4.878 4.878 0 01-1.558-1.11A5.5 5.5 0 01.4 11.243 5.27 5.27 0 010 9.182c0-.73.133-1.415.4-2.054a5.475 5.475 0 011.07-1.67 4.88 4.88 0 011.56-1.112 4.557 4.557 0 011.878-.4c.564 0 1.092.096 1.582.288.496.187.93.44 1.303.76.378.314.698.679.96 1.095.266.415.457.847.575 1.294H7.689a3.37 3.37 0 00-.368-.767 2.486 2.486 0 00-.591-.655 2.891 2.891 0 00-.807-.448 2.799 2.799 0 00-1.015-.176c-.427 0-.842.096-1.247.288-.4.186-.757.453-1.071.8-.31.34-.56.745-.752 1.214a4.036 4.036 0 00-.287 1.543c0 .554.096 1.066.287 1.534.192.47.443.877.752 1.223.314.341.671.608 1.07.8.406.191.821.287 1.248.287a3.05 3.05 0 001.119-.2 3.03 3.03 0 001.559-1.35c.17-.31.287-.637.351-.983h-3.11V9.014h4.58v5.323H8.266l-.408-.983a3.352 3.352 0 01-.775.544c-.25.133-.56.253-.927.36-.363.106-.778.16-1.247.16zM16.53 10.652a2.52 2.52 0 00-.177-.959 2.757 2.757 0 00-.447-.751 1.885 1.885 0 00-.656-.488 1.792 1.792 0 00-.767-.175c-.261 0-.517.058-.767.175-.25.118-.47.28-.656.488a2.511 2.511 0 00-.447.751 2.52 2.52 0 00-.176.96c0 .351.059.67.176.959.117.287.266.538.447.751.187.213.405.378.656.496.25.117.506.173.767.167a1.863 1.863 0 001.423-.663c.186-.213.336-.464.447-.751.118-.288.176-.608.176-.96zm1.47 0a4.27 4.27 0 01-.264 1.527 3.497 3.497 0 01-.76 1.183c-.319.33-.692.589-1.118.775-.426.187-.885.28-1.375.28s-.948-.093-1.375-.28a3.487 3.487 0 01-1.119-.775 3.669 3.669 0 01-.759-1.183 4.012 4.012 0 01-.264-1.527c0-.554.088-1.06.264-1.518.181-.458.434-.855.76-1.191.32-.33.692-.589 1.118-.775.427-.187.885-.28 1.375-.28s.949.093 1.375.28c.426.186.8.445 1.119.775.32.33.573.727.76 1.19.175.46.263.965.263 1.52zM12.179 4.017H14v1.821h-1.821zM14.963 4.017h1.821v1.821h-1.821z" />
</svg>`]

const titles = [`Ethereum`, `BSC Mainnet`, `Polygon Network`, `Optimism`, `Arbitrum One`, `Gnosis Chain`, `Avalanche Mainnet`, `Ethereum Goerli`]

const checkBoxes = document.querySelectorAll(".checkbox")
const modal = document.querySelector(".modal")
const modalOptions = document.querySelectorAll(".modal-option")
const modalX = document.querySelector(".modalX")

const choosers = document.querySelectorAll(".chooser")
const iconDivs = document.querySelectorAll(".chooser>div:nth-child(1)")
const textDivs = document.querySelectorAll(".chooser>div:nth-child(2)")

for(let i=0; i<choosers.length; i++){
    choosers[i].addEventListener("click", ()=>{
        modal.style.display="block"
    })
}

for(let i=0; i<modalOptions.length; i++){
    modalOptions[i].addEventListener("click", ()=>{
        for(let j=0; j<iconDivs.length; j++){
            iconDivs[j].innerHTML = icons[i]
            textDivs[j].innerText = titles[i]
        }
        modal.style.display = "none"
        for(let j=0; j<checkBoxes.length; j++){
            checkBoxes[j].classList.remove("checked-box")
        }
        checkBoxes[i].classList.add("checked-box")
    })
}

modalX.addEventListener("click", ()=>{
    modal.style.display = "none"
})

let opened = false

burger.addEventListener("click", ()=>{
    if(!opened){
        burgerImg.src = "img/whitex.svg"
        opened = true
        menu.style.display = "flex"
        main.style.paddingTop = "150px"
    }
    else{
        opened=false
        menu.style.display="none"
        burgerImg.src = "img/burger.svg"
        main.style.paddingTop = "50px"
    }
    


})