"use strict";

const billInput = document.querySelector(".bill-input");
const tipBtns = document.querySelectorAll(".tip-btn");
const customTipInput = document.querySelector(".custom");
const peopleInput = document.querySelector(".people-input");
const resetBtn = document.querySelector(".reset-btn");
const totalTip = document.querySelector(".total-tip");
const totalPay = document.querySelector(".total-pay");
const btnContainer = document.querySelector(".btn-container");

let selectedTip;
let finalBill;
let totalPeople;

billInput.addEventListener("keyup", function () {
  const bill = billInput.value;
  console.log(bill);
  finalBill = bill;
  // return finalBill;
});

btnContainer.addEventListener("click", function(e) {
  const target = e.target.dataset.tipValue;
  selectedTip = target;
  console.log(target);
  // return selectedTip;
  
  tipBtns.forEach(btn => {
    // btn.classList.remove(".target-btn");
    if (btn.dataset.tipValue === "") {
      return;
    }
    if (btn.dataset.tipValue === target) {
      // e.target.closest(".tip-btn").style.backgroundColor = "blue";
      btn.style.backgroundColor = "blue";
      // btn.classList.add(".target-btn");
    } else {
      btn.style.backgroundColor = "var(--color-btns)";
      // btn.classList.remove(".target-btn");
    }
  })
});

peopleInput.addEventListener("keyup", function () {
  const people = peopleInput.value;
  console.log(people);
  totalPeople = people;
  // return totalPeople;
});

// console.log(finalBill, selectedTip);

// tipBtns.forEach(btn => {
//   btn.addEventListener("click", function() {
//     btn.style.backgroundColor = "var(--color-btns)";
//     btn.style.backgroundColor = "blue";
//     btn.classList.add(".clicked");
//     console.log(btn.dataset);
//   })
// })

