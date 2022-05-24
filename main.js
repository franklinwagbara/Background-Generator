let body = document.body;
let input1 = document.querySelector("#color1");
let input2 = document.querySelector("#color2");
let h4 = document.querySelector("h4");

let lg_value = "";

handleLinearGradient = (e) => {
  let color1 = input1.value;
  let color2 = input2.value;
  lg_value = `linear-gradient(to right, ${color1}, ${color2})`;
  body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;

  h4.innerText = lg_value;
};

input1.addEventListener("input", handleLinearGradient);
input2.addEventListener("input", handleLinearGradient);
