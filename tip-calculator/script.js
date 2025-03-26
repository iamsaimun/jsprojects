const myform = document.getElementById("main-form");
const totalTipHTML = document.getElementById("total-tip");
const tipHTML = document.getElementById("tip");
const resetButton = document.getElementById("reset-button");
const billAmountInput = document.getElementById("billAmount");
const tipAmountInput = document.getElementById("tipAmount");
const totalSection = document.getElementById("total");

myform.addEventListener("submit", formSubmit);
resetButton.addEventListener("click", reset);

function formSubmit(event) {
  event.preventDefault();
  const userInputs = Object.fromEntries(new FormData(event.target));
  const totaltip =
    +userInputs.billAmount +
    (+userInputs.billAmount * +userInputs.tipAmount) / 100;
  tipHTML.innerText = `Tip : ${userInputs.tipAmount} Tk`;
  totalTipHTML.innerText = `Total Tip : ${totaltip} Tk`;
}

function reset() {
  billAmountInput.value = "";
  tipAmountInput.value = "";
  totalSection.remove();
}
