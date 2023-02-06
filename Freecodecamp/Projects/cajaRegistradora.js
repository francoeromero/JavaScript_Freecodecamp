const checkCashRegister = (price, cash, cid) => {
    // Unidad de cantidad para cada tipo de moneda
    const UNIT_AMOUNT = {
      "PENNY": .01,
      "NICKEL": .05,
      "DIME": .10,
      "QUARTER": .25,
      "ONE": 1.00,
      "FIVE": 5.00,
      "TEN": 10.00,
      "TWENTY": 20.00,
      "ONE HUNDRED": 100.00
    }
  
    // Total en caja
    let totalCID = 0;
    for (let element of cid) {
      totalCID += element[1];
    }
  
    // Redondea el total en caja a 2 decimales
    totalCID = totalCID.toFixed(2);
  
    // Cambio a dar
    let changeToGive = cash - price;
  
    // Array de cambio
    const changeArray = [];
  
    // Si no hay suficiente dinero en caja
    if (changeToGive > totalCID) {
      return { status: "INSUFFICIENT_FUNDS", change: changeArray };
    } 
    // Si el cambio es exactamente igual al dinero en caja
    else if (changeToGive.toFixed(2) === totalCID) {
      return { status: "CLOSED", change: cid };
    } 
    // Si hay suficiente dinero en caja
    else {
      // Invertir el array de caja
      cid = cid.reverse();
  
      // Iterar sobre cada elemento en caja
      for (let elem of cid) {
        let temp = [elem[0], 0];
        // Mientras aun haya suficiente dinero de esa moneda y no se haya acabado
        while (changeToGive >= UNIT_AMOUNT[elem[0]] && elem[1] > 0) {
          temp[1] += UNIT_AMOUNT[elem[0]];
          elem[1] -= UNIT_AMOUNT[elem[0]];
          changeToGive -= UNIT_AMOUNT[elem[0]];
          // Redondea el cambio a 2 decimales
          changeToGive = changeToGive.toFixed(2);
        }
        // Si hay algún cambio de esa moneda, agregarlo al array de cambio
        if (temp[1] > 0) {
          changeArray.push(temp);
        }
      }
    }
  
    // Si aun falta dinero para dar cambio
    if (changeToGive > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    // Retorna el objeto con status "OPEN" y el array de cambio
    return { status: "OPEN", change: changeArray};
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);