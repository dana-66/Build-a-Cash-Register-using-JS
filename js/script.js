// // you'll build a cash register app that will return change to the customer based on the price of the item, the amount of cash provided by the customer, and the amount of cash in the cash drawer.
// // You'll also need to show different messages to the user in different scenarios:
// //  1-  "Status: INSUFFICIENT_FUNDS" => if cash-in-drawer is less than the change due, or if you cannot return the exact change.
// //  2-  "Status: CLOSED" => if cash-in-drawer is equal to the change due.
// //  3-  "Status: OPEN" =>  if cash-in-drawer is greater than the change due and you can return change, with the change due in coins and bills sorted in highest to lowest order.

// let price = 1.87;   //price of the item
// // available currency in the drawer
// let cid = [
//   ['PENNY', 1.01],
//   ['NICKEL', 2.05],
//   ['DIME', 3.1],
//   ['QUARTER', 4.25],
//   ['ONE', 90],
//   ['FIVE', 55],
//   ['TEN', 20],
//   ['TWENTY', 60],
//   ['ONE HUNDRED', 100]
// ];
// const dollarAmount = [
//   ["penny", 0.01],
//   ["nickel", 0.05],
//   ["dime", 0.1],
//   ["quarter", 0.25],
//   ["dollar", 1],
//   ["fiveDollars", 5],
//   ["tenDollars", 10],
//   ["twentyDollars", 20],
//   ["oneHundredDollar", 100]
// ]

// const cash = Number(document.getElementById("cash").value);
// const purchaseBtn = document.getElementById("purchase-btn");
// const priceScreen = document.getElementById("total");
// const tableValue = document.querySelectorAll(".amount");
// const displayChangeDue = document.getElementById("change-due");


// const formatResults = (status, change) => {
//   displayChangeDue.innerHTML = `<p>Status: ${status}</p>`;
//   change.map(
//     money => (displayChangeDue.innerHTML += `<p>${money[0]}: $${money[1]}</p>`)
//   );
//   return;
// };

// // check cash register
// const checkCashRegister = () => {
//   if (cash < price) {
//     alert("Customer does not have enough money to purchase the item");
//     cash = "";
//     return;
//   }
//   if (cash === price) {
//     displayChangeDue.innerHTML = `<p>No change due- customer paid with exact cash</p>`;
//     cash = "";
//     return;
//   }
//   let changeDue = cash - price;
//   // let reverseCid = [...cid].reverse();
//   let result = { status: 'OPEN', change: [] };
//   // let dollarEquivalent = [100, 20, 10, 5, 1, 0.25, 0.05, 0.01];
//   let totalCID = parseFloat(
//     // .map => to convert to number, .reduce => to make it a single value
//     cid.map(total[1]).reduce((prev, curr) => prev + curr).toFixed(2)
//   );
//   if (totalCID < changeDue) {
//     return (displayChangeDue.innerHTML = `<p>Status: INSUFFICIENT_FUNDS</p>`)
//   };
//   if (totalCID === changeDue) {
//     result.status = "CLOSED"
//   }

//   for (let i = 0; i <= cid.length; i++) {
//     if (changeDue >= dollarAmount[i][1] && changeDue > 0) {
//       let count = 0;
//       let total = cid[i][1];
//       while (total > 0 && changeDue >= dollarAmount[i][1]) {
//         total -= dollarAmount[i][1];
//         changeDue = parseFloat((changeDue -= dollarAmount[i][1].toFixed(2)));
//         count++;
//       }
//       if (count > 0) {
//         result.change.push((cid[i][1], count * dollarAmount[i][1]))
//       }
//     }
//   }
//   if (changeDue > 0) {
//     return (displayChangeDue.innerHTML = `<p>Status: INSUFFICIENT_FUNDS</p>`);
//   }
//   formatResults(result.status, result.change);
//   updateUI(result.change);
// };

// const checkResults = () => {
//   if(!cash){
//     return;
//   }
//   checkCashRegister();
// };

// const updateUI = change => {
//   const currencyNameMap = {
//     PENNY: 'Pennies',
//     NICKEL: 'Nickels',
//     DIME: 'Dimes',
//     QUARTER: 'Quarters',
//     ONE: 'Ones',
//     FIVE: 'Fives',
//     TEN: 'Tens',
//     TWENTY: 'Twenties',
//     'ONE HUNDRED': 'Hundreds'
//   };
//   // update cid if change is passed in
//   if(change) {
//     change.forEach(changeArr => {
//       const targetArr = cid.find(cidArr => cidArr[0] === changeArr[0]);
//       targetArr[1] = parseFloat((targetArr[1] - changeArr[1].toFixed(2)));
//     });
//   }
//   String(cash) = "";
//   priceScreen.textContent = `Total: $${price}`;
//   cashDrawerDisplay.innerHTML = `<p><strong>Change in drawer:</strong></p>
//     ${cid
//       .map(money => `<p>${currencyNameMap[money[0]]}: $${money[1]}</p>`)
//       .join('')}  
//   `;
// }

// purchaseBtn.addEventListener("click", checkResults);
// // cash.addEventListener("keydown", e => {
// //   if(e.key === "Enter"){
// //     checkResults();
// //   }
// // });
// updateUI();

let price = 3.26;
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

const displayChangeDue = document.getElementById('change-due');
const cash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const priceScreen = document.getElementById('price-screen');
const cashDrawerDisplay = document.getElementById('cash-drawer-display');

const formatResults = (status, change) => {
  displayChangeDue.innerHTML = `<p>Status: ${status}</p>`;
  change.map(
    money => (displayChangeDue.innerHTML += `<p>${money[0]}: $${money[1]}</p>`)
  );
  return;
};

const checkValid = () => {
  if (Number(cash.value) < price) {
    alert('Customer does not have enough money to purchase the item');
    cash.value = '';
    return;
  }

  if (Number(cash.value) === price) {
    displayChangeDue.innerHTML =
      '<p>No change due - customer paid with exact cash</p>';
    cash.value = '';
    return;
  }
}
const checkCashRegister = () => {
  checkValid();
  let changeDue = Number(cash.value) - price;
  let reversedCid = [...cid].reverse();
  let denominations = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  let result = { status: 'OPEN', change: [] };
  let totalCID = parseFloat(
    cid
      .map(total => total[1])
      .reduce((prev, curr) => prev + curr)
      .toFixed(2)
  );

  if (totalCID < changeDue) {
    return (displayChangeDue.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>');
  }

  if (totalCID === changeDue) {
    result.status = 'CLOSED';
  }

  for (let i = 0; i <= reversedCid.length; i++) {
    if (changeDue >= denominations[i] && changeDue > 0) {
      let count = 0;
      let total = reversedCid[i][1];
      while (total > 0 && changeDue >= denominations[i]) {
        total -= denominations[i];
        changeDue = parseFloat((changeDue -= denominations[i]).toFixed(2));
        count++;
      }
      if (count > 0) {
        result.change.push([reversedCid[i][0], count * denominations[i]]);
      }
    }
  }
  if (changeDue > 0) {
    return (displayChangeDue.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>');
  }

  formatResults(result.status, result.change);
  updateUI(result.change);
};

const checkResults = () => {
  if (!cash.value) {
    return;
  }
  checkCashRegister();
};

const updateUI = change => {
  const currencyNameMap = {
    PENNY: 'Pennies',
    NICKEL: 'Nickels',
    DIME: 'Dimes',
    QUARTER: 'Quarters',
    ONE: 'Ones',
    FIVE: 'Fives',
    TEN: 'Tens',
    TWENTY: 'Twenties',
    'ONE HUNDRED': 'Hundreds'
  };
  // Update cid if change is passed in
  if (change) {
    change.forEach(changeArr => {
      const targetArr = cid.find(cidArr => cidArr[0] === changeArr[0]);
      targetArr[1] = parseFloat((targetArr[1] - changeArr[1]).toFixed(2));
    });
  }

  cash.value = '';
  priceScreen.textContent = `Total: $${price}`;
  cashDrawerDisplay.innerHTML = `<p><strong>Change in drawer:</strong></p>
    ${cid
      .map(money => `<p>${currencyNameMap[money[0]]}: $${money[1]}</p>`)
      .join('')}  
  `;
};

purchaseBtn.addEventListener('click', checkResults);

cash.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkResults();
  }
});

updateUI();