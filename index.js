let res = document.querySelector("#res");
let btn0 = document.querySelector("#btn0");
let btn1 = document.querySelector("#btn1");
let btnClr = document.querySelector("#btnClr");
let btnEql = document.querySelector("#btnEql");
let btnSum = document.querySelector("#btnSum");
let btnSub = document.querySelector("#btnSub");
let btnMul = document.querySelector("#btnMul");
let btnDiv = document.querySelector("#btnDiv");

btn0.addEventListener("click", () => {
  res.innerText += "0";
});
btn1.addEventListener("click", () => {
  res.innerText += "1";
});
btnSum.addEventListener("click", () => {
  res.innerText += "+";
});
btnSub.addEventListener("click", () => {
  res.innerText += "-";
});
btnMul.addEventListener("click", () => {
  res.innerText += "*";
});
btnDiv.addEventListener("click", () => {
  res.innerText += "/";
});
btnClr.addEventListener("click", () => {
  res.innerText = "";
});
btnEql.addEventListener("click", () => {
  let equation = res.innerText;

  if (equation.indexOf("+") !== -1) {
    let decResult =
      parseInt(equation.split("+")[0], 2) + parseInt(equation.split("+")[1], 2);
    res.innerText = dec2bin(decResult);
  } else if (equation.indexOf("-") !== -1) {
    let decResult =
      parseInt(equation.split("-")[0], 2) - parseInt(equation.split("-")[1], 2);
    res.innerText = dec2bin(decResult);
  } else if (equation.indexOf("*") !== -1) {
    let decResult =
      parseInt(equation.split("*")[0], 2) * parseInt(equation.split("*")[1], 2);
    res.innerText = dec2bin(decResult);
  } else if (equation.indexOf("/") !== -1) {
    let decResult =
      parseInt(equation.split("/")[0], 2) / parseInt(equation.split("/")[1], 2);
    res.innerText = dec2bin(decResult);
  }
});

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}
