var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");
var draw = document.getElementById("draw");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var crossWin = document.getElementById("crossWin");
var circleWin = document.getElementById("circleWin");
var dashboard = document.getElementById("dashboard");
var invalidSelection = document.getElementById("invalidSelection");

var player = Math.floor(Math.random() * 2);
var forDraw = 0;
if (player) {
  player1.style.backgroundColor = "rgb(0, 255, 0)";
  player2.style.backgroundColor = "white";
} else {
  player2.style.backgroundColor = "rgb(0, 255, 0)";
  player1.style.backgroundColor = "white";
}
function checkTheWinner() {
  if (
    box1.classList.value.includes("cross") &&
    box2.classList.value.includes("cross") &&
    box3.classList.value.includes("cross")
  ) {
    console.log("cross wins");
    box1.style.backgroundColor = "rgb(255, 255, 0)";
    box2.style.backgroundColor = "rgb(255, 255, 0)";
    box3.style.backgroundColor = "rgb(255, 255, 0)";
    setTimeout(() => {
      crossWin.style.display = "flex";
      dashboard.style.opacity = "0";
    }, 1500);
  }
  if (
    box1.classList.value.includes("circle") &&
    box2.classList.value.includes("circle") &&
    box3.classList.value.includes("circle")
  ) {
    console.log("circle wins");
    box1.style.backgroundColor = "rgb(255, 255, 0)";
    box2.style.backgroundColor = "rgb(255, 255, 0)";
    box3.style.backgroundColor = "rgb(255, 255, 0)";
    setTimeout(() => {
      circleWin.style.display = "flex";
      dashboard.style.opacity = "0";
    }, 1500);
  }
  if (
    box4.classList.value.includes("cross") &&
    box5.classList.value.includes("cross") &&
    box6.classList.value.includes("cross")
  ) {
    box4.style.backgroundColor = "rgb(255, 255, 0)";
    box5.style.backgroundColor = "rgb(255, 255, 0)";
    box6.style.backgroundColor = "rgb(255, 255, 0)";
    console.log("cross wins");
    setTimeout(() => {
      crossWin.style.display = "flex";
      dashboard.style.opacity = "0";
    }, 1500);
  }
  if (
    box4.classList.value.includes("circle") &&
    box5.classList.value.includes("circle") &&
    box6.classList.value.includes("circle")
  ) {
    box4.style.backgroundColor = "rgb(255, 255, 0)";
    box5.style.backgroundColor = "rgb(255, 255, 0)";
    box6.style.backgroundColor = "rgb(255, 255, 0)";
    console.log("circle wins");
    setTimeout(() => {
      circleWin.style.display = "flex";
      dashboard.style.opacity = "0";
    }, 1500);
  }
  if (
    box7.classList.value.includes("cross") &&
    box8.classList.value.includes("cross") &&
    box9.classList.value.includes("cross")
  ) {
    box7.style.backgroundColor = "rgb(255, 255, 0)";
    box8.style.backgroundColor = "rgb(255, 255, 0)";
    box9.style.backgroundColor = "rgb(255, 255, 0)";
    console.log("cross wins");
    setTimeout(() => {
      crossWin.style.display = "flex";
      dashboard.style.opacity = "0";
    }, 1500);
  }
  if (
    box7.classList.value.includes("circle") &&
    box8.classList.value.includes("circle") &&
    box9.classList.value.includes("circle")
  ) {
    box7.style.backgroundColor = "rgb(255, 255, 0)";
    box8.style.backgroundColor = "rgb(255, 255, 0)";
    box9.style.backgroundColor = "rgb(255, 255, 0)";
    setTimeout(() => {
      circleWin.style.display = "flex";
      dashboard.style.opacity = "0";
    }, 1500);
    console.log("circle wins");
  }
  if (
    box1.classList.value.includes("cross") &&
    box4.classList.value.includes("cross") &&
    box7.classList.value.includes("cross")
  ) {
    box1.style.backgroundColor = "rgb(255, 255, 0)";
    box4.style.backgroundColor = "rgb(255, 255, 0)";
    box7.style.backgroundColor = "rgb(255, 255, 0)";
    setTimeout(() => {
      crossWin.style.display = "flex";
      dashboard.style.opacity = "0";
    }, 1500);
    console.log("cross wins");
  }
  if (
    box1.classList.value.includes("circle") &&
    box4.classList.value.includes("circle") &&
    box7.classList.value.includes("circle")
  ) {
    box1.style.backgroundColor = "rgb(255, 255, 0)";
    box4.style.backgroundColor = "rgb(255, 255, 0)";
    box7.style.backgroundColor = "rgb(255, 255, 0)";
    setTimeout(() => {
      circleWin.style.display = "flex";
      dashboard.style.opacity = "0";
    }, 1500);
    console.log("circle wins");
  }
  if (
    box2.classList.value.includes("cross") &&
    box5.classList.value.includes("cross") &&
    box8.classList.value.includes("cross")
  ) {
    box2.style.backgroundColor = "rgb(255, 255, 0)";
    box5.style.backgroundColor = "rgb(255, 255, 0)";
    box8.style.backgroundColor = "rgb(255, 255, 0)";
    setTimeout(() => {
      dashboard.style.opacity = "0";
      crossWin.style.display = "flex";
    }, 1500);
    console.log("cross wins");
  }
  if (
    box2.classList.value.includes("circle") &&
    box5.classList.value.includes("circle") &&
    box8.classList.value.includes("circle")
  ) {
    box2.style.backgroundColor = "rgb(255, 255, 0)";
    box5.style.backgroundColor = "rgb(255, 255, 0)";
    box8.style.backgroundColor = "rgb(255, 255, 0)";
    setTimeout(() => {
      circleWin.style.display = "flex";
      dashboard.style.opacity = "0";
    }, 1500);
    console.log("circle wins");
  }
  if (
    box3.classList.value.includes("cross") &&
    box6.classList.value.includes("cross") &&
    box9.classList.value.includes("cross")
  ) {
    box3.style.backgroundColor = "rgb(255, 255, 0)";
    box6.style.backgroundColor = "rgb(255, 255, 0)";
    box9.style.backgroundColor = "rgb(255, 255, 0)";
    setTimeout(() => {
      crossWin.style.display = "flex";
      dashboard.style.opacity = "0";
    }, 1500);
    console.log("cross wins");
  }
  if (
    box3.classList.value.includes("circle") &&
    box6.classList.value.includes("circle") &&
    box9.classList.value.includes("circle")
  ) {
    box3.style.backgroundColor = "rgb(255, 255, 0)";
    box6.style.backgroundColor = "rgb(255, 255, 0)";
    box9.style.backgroundColor = "rgb(255, 255, 0)";
    setTimeout(() => {
      circleWin.style.display = "flex";
      dashboard.style.opacity = "0";
    }, 1500);
    console.log("circle wins");
  }
  if (
    box1.classList.value.includes("cross") &&
    box5.classList.value.includes("cross") &&
    box9.classList.value.includes("cross")
  ) {
    box1.style.backgroundColor = "rgb(255, 255, 0)";
    box5.style.backgroundColor = "rgb(255, 255, 0)";
    box9.style.backgroundColor = "rgb(255, 255, 0)";
    setTimeout(() => {
      crossWin.style.display = "flex";
      dashboard.style.opacity = "0";
    }, 1500);
    console.log("cross wins");
  }
  if (
    box1.classList.value.includes("circle") &&
    box5.classList.value.includes("circle") &&
    box9.classList.value.includes("circle")
  ) {
    box1.style.backgroundColor = "rgb(255, 255, 0)";
    box5.style.backgroundColor = "rgb(255, 255, 0)";
    box9.style.backgroundColor = "rgb(255, 255, 0)";
    setTimeout(() => {
      dashboard.style.opacity = "0";
      circleWin.style.display = "flex";
    }, 1500);
    console.log("circle wins");
  }
  if (
    box3.classList.value.includes("cross") &&
    box5.classList.value.includes("cross") &&
    box7.classList.value.includes("cross")
  ) {
    box3.style.backgroundColor = "rgb(255, 255, 0)";
    box5.style.backgroundColor = "rgb(255, 255, 0)";
    box7.style.backgroundColor = "rgb(255, 255, 0)";
    setTimeout(() => {
      crossWin.style.display = "flex";
      dashboard.style.opacity = "0";
    }, 1500);
    console.log("cross wins");
  }
  if (
    box3.classList.value.includes("circle") &&
    box5.classList.value.includes("circle") &&
    box7.classList.value.includes("circle")
  ) {
    box3.style.backgroundColor = "rgb(255, 255, 0)";
    box5.style.backgroundColor = "rgb(255, 255, 0)";
    box7.style.backgroundColor = "rgb(255, 255, 0)";
    setTimeout(() => {
      dashboard.style.opacity = "0";
      circleWin.style.display = "flex";
    }, 1500);
    console.log("circle wins");
  }
  if (forDraw == 9) {
    draw.style.display = "flex";
    dashboard.style.opacity = "0";
  }
}

function fillAt(boxId) {
  var arrr = boxId.classList;
  if (arrr.value.includes("selected")) {
    console.log("already filled");
    invalidSelection.style.display = "flex";
    setTimeout(() => {
      invalidSelection.style.display = "none";
    }, 1100);
  } else {
    forDraw = forDraw + 1;
    if (player == 1) {
      boxId.innerHTML = `<i class="ri-close-fill filled"></i>`;
      player2.style.backgroundColor = "rgb(0, 255, 0)";
      player1.style.backgroundColor = "white";
      boxId.classList.add("selected");
      boxId.classList.add("cross");
      player = 0;
    } else {
      boxId.innerHTML = `<i class="ri-circle-line filled"></i>`;
      player2.style.backgroundColor = "white";
      player1.style.backgroundColor = "rgb(0, 255, 0)";
      player = 1;
      boxId.classList.add("selected");
      boxId.classList.add("circle");
    }
  }
  checkTheWinner();
}

function refresh() {
  location.reload();
}
