var dogJobs = [
  "<th>product Name</th><th>Product price</th><th>Category</th><th>Picture</th>",
];

function addTask() {
  var prodName = document.getElementById("pName");
  var prodPrice = document.getElementById("pPrice");
  var prodCat = document.getElementById("cat");
  var prodLink = document.getElementById("pLink");
  var dogTable = document.getElementById("superTable");

  var newTask = "";
  newTask += "<tr>";
  newTask += "<td>" + prodName.value + "</td>";
  newTask += "<td>" + prodPrice.value + "</td>";
  newTask += "<td>" + prodCat.value + "</td>";
  newTask += "<td > <img src='" + prodLink.value + "'/ >   </td>";
  newTask += "</tr>";
  dogJobs.push(newTask);

  dogTable.innerHTML = createTable();
  resetMe(prodName, prodPrice, prodCat, prodLink);
}

function createTable() {
  var tableData = "";
  for (var counter = 0; counter < dogJobs.length; counter += 1) {
    tableData += dogJobs[counter];
  }
  return tableData;
}
function deleteLast() {
  dogJobs.pop();
  superTable.innerHTML = createTable();
}

function resetMe(prodName, prodPrice, prodCat, prodLink) {
  prodName.value = "";
  prodPrice.value = "";
  prodCat.value = "";
  prodLink.value = "";
}
