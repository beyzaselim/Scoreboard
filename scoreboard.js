let homePoints = document.getElementById("home-points");
let homeCount = 0;
let guestPoints = document.getElementById("guest-points");
let guestCount = 0;

function homeAddPoint() {
  homeCount = homeCount + 1;
  homePoints.innerText = homeCount;
}

function homeAddTwoPoints() {
  homeCount = homeCount + 2;
  homePoints.innerText = homeCount;
}

function homeAddThreePoints() {
  homeCount = homeCount + 3;
  homePoints.innerText = homeCount;
}

function guestAddPoint() {
  guestCount = guestCount + 1;
  guestPoints.innerText = guestCount;
}

function guestAddTwoPoints() {
  guestCount = guestCount + 2;
  guestPoints.innerText = guestCount;
}
function guestAddThreePoints() {
  guestCount = guestCount + 3;
  guestPoints.innerText = guestCount;
}
