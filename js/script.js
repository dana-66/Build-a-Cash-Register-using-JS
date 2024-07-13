// you'll build a cash register app that will return change to the customer based on the price of the item, the amount of cash provided by the customer, and the amount of cash in the cash drawer.
// You'll also need to show different messages to the user in different scenarios:
//  1-  "Status: INSUFFICIENT_FUNDS" => if cash-in-drawer is less than the change due, or if you cannot return the exact change.
//  2-  "Status: CLOSED" => if cash-in-drawer is equal to the change due.
//  3-  "Status: OPEN" =>  if cash-in-drawer is greater than the change due and you can return change, with the change due in coins and bills sorted in highest to lowest order.

let price = 1.87;   //price of the item
// available currency in the drawer
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];
const dollarAmount = [
  [penny, 0.01],
  [nickel, 0.05],
  [dime, 0.1],
  [quarter, 0.25],
  [dollar, 1],
  [fiveDollars, 5],
  [tenDollars, 10],
  [twentyDollars, 20],
  [oneHundredDollar, 100]
]

const cash = Number(document.getElementById("cash").value);
const purchaseBtn = document.getElementById("purchase-btn");
const priceScreen = document.getElementById("total");
const tableValue = document.querySelectorAll(".amount");
const displayChangeDue = document.getElementById("change-due");



// check cash register
const checkCashRegister = () => {
  if(cash < price){
    alert("Customer does not have enough money to purchase the item");
    cash = "";
    return;
  }
  if(cash === price){
    displayChangeDue.innerHTML = `<p>No change due- customer paid with exact cash</p>`;
    cash = "";
    return;
  }
  let changeDue = cash - price;
  let reverseCid = [...cid].reverse();
  let result = {status: 'OPEN', change: []};

};

purchaseBtn.addEventListener("click" , ()=>{
  // isValid();
});


