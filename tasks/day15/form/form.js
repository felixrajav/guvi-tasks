const form = document.getElementById("form");
const table = document.getElementById("dataTable");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  debugger;
  const name = document.getElementById("first-name").value;
  const lname = document.getElementById("last-name").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const foodcheckboxes = document.querySelectorAll(
    'input[name="food"]:checked'
  );
  const foodChoices = Array.from(foodcheckboxes).map(
    (checkbox) => checkbox.value
  );

  if (foodChoices.length < 2) {
    alert("Please choose at least 2 food options.");
    return;
  }
  const address= document.getElementById("address").value;
  const pin= document.getElementById("pincode").value;
  const state= document.getElementById("state").value;
  const country= document.getElementById("country").value;

  const newRow = table.insertRow(); //document.createElement("tr");
  const nameCol = newRow.insertCell(); //document.createElement("td");
  const lnameCol = newRow.insertCell(); //document.createElement("td");
  const genderCol = newRow.insertCell(); //document.createElement("td");
  const foodCol = newRow.insertCell(); //document.createElement("td");
  const addresscol= newRow.insertCell(); //document.createElement("td");
  const pincol= newRow.insertCell(); //document.createElement("td");
  const statecol= newRow.insertCell(); //document.createElement("td");
  const countrycol= newRow.insertCell(); //document.createElement("td");

  nameCol.textContent = name;
  lnameCol.textContent= lname;
  genderCol.textContent = gender;
  foodCol.textContent = foodChoices.join(", ");
  addresscol.textContent= address;
  pincol.textContent= pin;
  statecol.textContent= state;
  countrycol.textContent= country;

  form.reset();
});
