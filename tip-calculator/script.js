const myform = document.getElementById("main-form");
const totalTipHTML = document.getElementById("total-tip");
const tipHTML = document.getElementById("tip");
const resetButton = document.getElementById("reset-button");
const billAmountInput = document.getElementById("billAmount");
const tipAmountInput = document.getElementById("tipAmount");
const totalSection = document.getElementById("total");

myform.addEventListener("submit", formSubmit);
resetButton.addEventListener("click", reset);

totalSection.classList.add("hideElement");
resetButton.disabled = true;

// functions for execute the form submission.
function formSubmit(event) {
  event.preventDefault();
  const userInputs = Object.fromEntries(new FormData(event.target));
  const totaltip =
    +userInputs.billAmount +
    (+userInputs.billAmount * +userInputs.tipAmount) / 100;
  totalSection.classList.remove("hideElement");
  totalSection.classList.add("showElement");
  tipHTML.innerText = `Tip : ${userInputs.tipAmount} Tk`;
  totalTipHTML.innerText = `Total Tip : ${totaltip} Tk`;
  resetButton.disabled = false;
}

// function for resetting the input fields and result.
function reset() {
  billAmountInput.value = "";
  tipAmountInput.value = "";
  tipHTML.textContent = "";
  totalTipHTML.textContent = "";
  totalSection.classList.remove("showElement");
  totalSection.classList.add("hideElement");
  resetButton.disabled = true;
}
