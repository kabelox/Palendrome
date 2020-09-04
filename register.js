// in the same github repo (above) add new javascript file and design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument. cid is a 2D array listing available currency.The checkCashRegister() function should always return an object with a status key and a change key.Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

let stats = [
    { name: "ONE HUNDRED", val: 100.0 },
    { name: "TWENTY", val: 20.0 },
    { name: "TEN", val: 10.0 },
    { name: "FIVE", val: 5.0 },
    { name: "ONE", val: 1.0 },
    { name: "QUARTER", val: 0.25 },
    { name: "DIME", val: 0.1 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 }
  ];

   function checkCashRegister(purchasePrice, payment, cid){
    let result = { status: null, change: [] };
    let change = payment - purchasePrice;


let register = cid.reduce(
       function(account, current) {
          account.total += current[1];
          account[current[0]] = current[1];
              return account;
        },
        { total: 0 }
      );


      // change

  if (register.total === change) {
            result.status = "CLOSED";
            result.change = cid;
        return result;
      }

      //not enough funds nor cash
  if (register.total < change) {
        result.status = "INSUFFICIENT_FUNDS";
        return result;
      }

let change_array = stats.reduce(function(account, current) {
        let value = 0;

  while (register[current.name] > 0 && change >= current.val) {
            change -= current.val;
            register[current.name] -= current.val;
            value += current.val;
            change = Math.round(change * 100) / 100;
        }
 if (value > 0) {
            account.push([current.name, value]);
          }
          return account;
        }, []);

        // if no left in change_array return the string "INSUFFICIENT_FUNDS"

if (change_array.length < 1 || change > 0) {
        result.status = "INSUFFICIENT_FUNDS";
        return result;
          }

          // return change

 result.status = "OPEN";    result.change = change_array;
    return result;
}


console.log(checkCashRegister(19333.5, 24333.0, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90.0],
  ["FIVE", 55.0],
  ["TEN", 20.0],
  ["TWENTY", 60.0],
  ["ONE HUNDRED", 100.0]
]));