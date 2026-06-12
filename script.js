const heroBtn = document.getElementById("heroBtn");
const featureBtn = document.getElementById("featureBtn");
const unsubscribeBtn = document.getElementById("unsubscribeBtn");

heroBtn.addEventListener("click", () => {
  heroBtn.innerText = "Account opened!";
  heroBtn.disabled = true;
});

featureBtn.addEventListener("click", () => {
  featureBtn.innerText = "Feature Activated!";
  featureBtn.disabled = true;
});

unsubscribeBtn.addEventListener("click", () => {
  unsubscribeBtn.innerText = "Unsubscribed!";
  unsubscribeBtn.disabled = true;
});
