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

//  GET BUTTONS TO STAY COLOUR WHEN CLICKED, WORK OUT THE CUSTOM INPUT,
//  WORK OUT LINE 24 SO IT ONLY WORKS ON RELEVANT ELEMENTS
//  CHANE TYPE OF TIP, BILL AND PEOPLE TO NUMBER (NOT STRING)

const eventTypes = ["click", "keyup"];

eventTypes.forEach(type => {
  document.addEventListener(type, function (e) {
    // if (e.target.className !== "people-input" || "bill-input" || "tip-btn") return;
    console.log(e.target.className);

    if (type == "click" && e.target.className == "tip-btn") {
      selectedTip = e.target.dataset.tipValue;
      console.log(selectedTip, typeof(selectedTip));
    };

    if (type == "keyup" && e.target.className == "bill-input") {
      finalBill = e.target.value;
      console.log(finalBill);
    };

    if (type == "keyup" && e.target.className == "people-input") {
      totalPeople = e.target.value;
      console.log(totalPeople);
    };

    if (selectedTip && totalPeople && finalBill) {
      +finalBill / 100;
    }
  });
});



// billInput.addEventListener("keyup", function () {
//   const bill = billInput.value;
//   console.log(bill);
//   finalBill = bill;
//   // return finalBill;
// });

// btnContainer.addEventListener("click", function(e) {
//   const target = e.target.dataset.tipValue;
//   selectedTip = target;
//   console.log(target);
//   // return selectedTip;
  
//   tipBtns.forEach(btn => {
//     // btn.classList.remove(".target-btn");
//     if (btn.dataset.tipValue === "") {
//       return;
//     }
//     if (btn.dataset.tipValue === target) {
//       // e.target.closest(".tip-btn").style.backgroundColor = "blue";
//       btn.style.backgroundColor = "blue";
//       // btn.classList.add(".target-btn");
//     } else {
//       btn.style.backgroundColor = "var(--color-btns)";
//       // btn.classList.remove(".target-btn");
//     }
//   })
// });

//  TRY THIS CODE ON WEBPAGE OPEN (STACK OVERFLOW)

// document.addEventListener("keyup", function (e) {
//   if(e.target.className == "bill-input") {
//     finalBill = billInput.value;
//     console.log(finalBill);

//   }
//   if(e.target.className == "people-input") {
//     totalPeople = peopleInput.value;
//     console.log(totalPeople);
//   }
// })


//  OR

// [ peopleInput, billInput ].forEach(function(element) {
//   element.addEventListener("input", function() {
//      this function does stuff
//   });
// });

// peopleInput.addEventListener("keyup", function () {
//   const people = peopleInput.value;
//   console.log(people);
//   totalPeople = people;
//   // return totalPeople;
// });

// console.log(finalBill, selectedTip);

// tipBtns.forEach(btn => {
//   btn.addEventListener("click", function() {
//     btn.style.backgroundColor = "var(--color-btns)";
//     btn.style.backgroundColor = "blue";
//     btn.classList.add(".clicked");
//     console.log(btn.dataset);
//   })
// })

