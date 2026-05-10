const targetDate = new Date("Apr 11, 2026 00:00:00").getTime();

setInterval(() => {

  const now = new Date().getTime();

  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) /
    (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60)) / 1000
  );

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

},1000);


/* BUTTON */

const giftBtn = document.getElementById("giftBtn");
const giftBox = document.getElementById("giftBox");

giftBtn.onclick = () => {
  giftBox.classList.toggle("hidden");
};


const letterBtn = document.getElementById("letterBtn");
const letterBox = document.getElementById("letterBox");

letterBtn.onclick = () => {
  letterBox.classList.toggle("hidden");
};


/* HEARTS */

const hearts = document.querySelector(".hearts");

for(let i=0;i<40;i++){

  let heart = document.createElement("span");

  heart.innerHTML = "💙";

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize =
    Math.random() * 20 + 20 + "px";

  heart.style.animationDuration =
    Math.random() * 3 + 3 + "s";

  hearts.appendChild(heart);
}