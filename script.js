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

//  WORK OUT THE CUSTOM INPUT & REMOVE COLOR FROM OTHER BTNS IF CUSTOM IS CLICKED
//  WORK OUT LINE 23 SO IT ONLY WORKS ON RELEVANT ELEMENTS
//  GET RESET BTN WORKING

const eventTypes = ["click", "keyup"];

eventTypes.forEach(type => {
  document.addEventListener(type, function (e) {
    // if (e.target.className !== "people-input" || "bill-input" || "tip-btn") return;
    console.log(e.target.className);

    if (type == "click" && e.target.className == "tip-btn") {
      selectedTip = +e.target.dataset.tipValue;
      console.log(selectedTip, typeof(selectedTip));
      tipBtns.forEach(btn => {
        +btn.dataset.tipValue === selectedTip ? btn.classList.add("target-btn") 
        : btn.classList.remove("target-btn"); 
      })
    };

    if (type == "keyup" && e.target.className == "bill-input") {
      finalBill = +e.target.value;
      console.log(finalBill, typeof(finalBill));
    };

    if (type == "keyup" && e.target.className == "people-input") {
      totalPeople = +e.target.value;
      console.log(totalPeople, typeof(totalPeople));
    };

    if (selectedTip && totalPeople && finalBill) {
      let liveTip = (finalBill / 100) * selectedTip;
      // console.log(liveTip);
      let liveTotalBill = finalBill + liveTip;
      // console.log(liveTotalBill);
      let tipTotalPerPerson = liveTip / totalPeople;
      // console.log(tipTotalPerPerson);
      let billTotalPerPerson = liveTotalBill / totalPeople;
      // console.log(billTotalPerPerson);
      totalTip.textContent = `$ ${tipTotalPerPerson.toFixed(2)}`;
      totalPay.textContent = `$ ${billTotalPerPerson.toFixed(2)}`;
    }

    if (type == "click" && e.target.className == "reset-btn") {
      //  EMPTY INPUT FIELDS AND TIP-BTNS REMOVE TARGET CLASS AND EMPTY TOTALTIP AND TOTALPAY
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

