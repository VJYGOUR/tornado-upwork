const manageBtn = document.querySelector(".manage-btn-main");
const managesDiv = document.querySelector(".manages-btn");
const closeManage = document.querySelector(".close-manage");
const modall = document.querySelector(".modal");
const cont = document.querySelector(".cont");
const container = document.querySelector(".container");

manageBtn.addEventListener("click", (event) => {
  managesDiv.style.display = "inline-block";
  cont.classList.add("filtdex");
  container.classList.add("filtdex");
});
closeManage.addEventListener("click", (event) => {
  managesDiv.style.display = "none";
  cont.classList.remove("filtdex");
  container.classList.remove("filtdex");
});
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
