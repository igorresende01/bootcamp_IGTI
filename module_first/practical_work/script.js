window.addEventListener("load", handleBackground());

function handleBackground() {
  const iptFirst = document.getElementById("inputFirst").value;
  const iptSecond = document.getElementById("inputSecond").value;
  const iptThird = document.getElementById("inputThird").value;
  document.getElementById("inputTxtFirst").value = iptFirst;
  document.getElementById("inputTxtSecond").value = iptSecond;
  document.getElementById("inputTxtThird").value = iptThird;

  const resultBackground = `rgb(${iptFirst}, ${iptSecond}, ${iptThird})`;
  document.querySelector(".square").style.backgroundColor = resultBackground;
}

document
  .getElementById("inputFirst")
  .addEventListener("input", handleBackground);
document
  .getElementById("inputSecond")
  .addEventListener("input", handleBackground);
document
  .getElementById("inputThird")
  .addEventListener("input", handleBackground);
