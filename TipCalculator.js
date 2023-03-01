function calculateTip() {
    let billAmount = Number(document.getElementById("bill").value);
    let tipPercentage = Number(document.getElementById("tip").value);
    let noOfPeople = Number(document.getElementById("people").value);

    let oriAmt = document.getElementById("oriAmount");
    let tipAmt = document.getElementById("tipAmount");
    let totalAmt = document.getElementById("totalBill");
    let perPerson = document.getElementById("eachPerson");

    let tipAmount = billAmount * (tipPercentage / 100);
    let totalBill = billAmount + tipAmount;
    let nopeople = totalBill / noOfPeople;

    oriAmt.innerHTML = "₹" + billAmount.toFixed(2)
    tipAmt.innerHTML = "₹" + tipAmount.toFixed(2)
    totalAmt.innerHTML = "₹" + totalBill.toFixed(2)
    perPerson.innerHTML = "₹" + nopeople.toFixed(2)

}