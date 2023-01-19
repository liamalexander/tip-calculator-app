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

//  WORK OUT LINE 27 SO IT ONLY WORKS ON RELEVANT ELEMENTS

const eventTypes = ["click", "keyup"];

eventTypes.forEach(type => {
  document.addEventListener(type, function (e) {
    let liveTip;
    let liveTotalBill;
    let tipTotalPerPerson;
    let billTotalPerPerson;

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

    if (type == "keyup" && e.target.id == "custom") {
      selectedTip = +e.target.value;
      console.log(selectedTip, typeof(selectedTip));
      customTipInput.classList.add("target-btn");

      tipBtns.forEach(btn => {
        if (btn.id !== "custom")
        btn.classList.remove("target-btn");
      })
    };

    if (selectedTip && totalPeople && finalBill) {
      liveTip = (finalBill / 100) * selectedTip;
      // console.log(liveTip);
      liveTotalBill = finalBill + liveTip;
      // console.log(liveTotalBill);
      tipTotalPerPerson = liveTip / totalPeople;
      // console.log(tipTotalPerPerson);
      billTotalPerPerson = liveTotalBill / totalPeople;
      // console.log(billTotalPerPerson);
      totalTip.textContent = `$ ${tipTotalPerPerson.toFixed(2)}`;
      totalPay.textContent = `$ ${billTotalPerPerson.toFixed(2)}`;
      // tipTotalPerPerson = 0;
      // billTotalPerPerson = 0;
      //  ABOVE TO TRY CLEAR THE TOTALS AFTER RESET AND NEXT CLICK
    }

    if (type == "click" && e.target.className == "reset-btn") {
      billInput.value = "";
      peopleInput.value = "";
      customTipInput.value = "";
      totalTip.textContent = "$";
      totalPay.textContent = "$";

      
      selectedTip = 0;
      totalPeople = 0;
      finalBill = 0;
      liveTip = 0;
      liveTotalBill = 0;
      tipTotalPerPerson = 0;
      billTotalPerPerson = 0;

      tipBtns.forEach(btn => {
        btn.classList.remove("target-btn");
      });
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

