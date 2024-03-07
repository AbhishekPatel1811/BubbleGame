var timer = 60;
var score = 0;
var hitrn = 0;

function makeBubble() {
  var clutter = "";

  for (let i = 1; i <= 161; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector(".panel_bottom").innerHTML = clutter;
}

function runTimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector(".panel_bottom").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

document
  .querySelector(".panel_bottom")
  .addEventListener("click", function (dets) {
    var clickedNum = Number(dets.target.textContent);
    if (clickedNum === hitrn) {
      increaseScore();
      makeBubble();
      getNewHit();
    }
  });

makeBubble();
runTimer();
getNewHit();
