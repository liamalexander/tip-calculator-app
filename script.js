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

const eventTypes = ["click", "keyup"];

eventTypes.forEach(type => {
  document.addEventListener(type, function (e) {
    let liveTip;
    let liveTotalBill;
    let tipTotalPerPerson;
    let billTotalPerPerson;

    // if (type && e.target.className !== "people-input" || "bill-input" || "tip-btn") return;

    if (type == "click" && e.target.className == "tip-btn") {
      selectedTip = +e.target.dataset.tipValue;

      tipBtns.forEach(btn => {
        +btn.dataset.tipValue === selectedTip ? btn.classList.add("target-btn") 
        : btn.classList.remove("target-btn"); 
      })
    };

    if (type == "keyup" && e.target.className == "bill-input") {
      finalBill = +e.target.value;
    };

    if (type == "keyup" && e.target.className == "people-input") {
      totalPeople = +e.target.value;
    };

    if (type == "keyup" && e.target.id == "custom") {
      let customInput = e.target.value;
      let customTip = customInput.replace("%", "");
      selectedTip = +customTip;
      customTipInput.classList.add("target-btn");

      tipBtns.forEach(btn => {
        if (btn.id !== "custom")
        btn.classList.remove("target-btn");
      })
    };

    if (selectedTip && totalPeople && finalBill) {
      liveTip = (finalBill / 100) * selectedTip;
      liveTotalBill = finalBill + liveTip;
      tipTotalPerPerson = liveTip / totalPeople;
      billTotalPerPerson = liveTotalBill / totalPeople;
      totalTip.textContent = `$ ${tipTotalPerPerson.toFixed(2)}`;
      totalPay.textContent = `$ ${billTotalPerPerson.toFixed(2)}`;
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