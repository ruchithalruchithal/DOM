//give red background for all ul tags

///get all elements based on tag name and returns list of node elements
const allULTags = document.getElementsByTagName("ul");

//LIST of Node Elements--> [NODE ELEMENT(ul), NODE ELEMENT(ul), NODE ELEMENT(ul)]

for (let i = 0; i < allULTags.length; i++) {
  allULTags[i].style.background = "pink";
}

//give blue left border to all elements with class name "list"
const allListElements = document.getElementsByClassName("list");

//LIST of Node Elements--> [NODE ELEMENT(ul), NODE ELEMENT(ul), NODE ELEMENT(ol)];
for (let i = 0; i < allListElements.length; i++) {
  allListElements[i].style.borderLeft = "5px solid blue";
}

const list3 = document.getElementById("list3");
//get only reference of the element which contains specific ID
list3.style.fontSize = "25px";
list3.style.color = "darkgreen";

//using getElementsByTagName, give box shadow to second UL element;
//pick by getElementsByTagName(ul)
//pick 1st element
const secondUlElement = document.getElementsByTagName("ul")[1];
secondUlElement.style.boxShadow = "5px 5px 5px grey";

const olItem5 = document.getElementById("ol-list-5");
//prints the content in form of HTML
console.log(olItem5.innerHTML);
//only prints all text content irrespective of visibility
console.log(olItem5.textContent);
//only prints all visible text content
console.log(olItem5.innerText);

//check if any li element is having text="Item - D"?

//fetch all list based on tagname
//for loop--> if(list[i].textContent == "Item D")

function checkSearchQuery(searchText) {
  const allLiElements = document.getElementsByTagName("li");
  for (let i = 0; i < allLiElements.length; i++) {
    if (allLiElements[i].textContent == searchText) {
      return true;
    }
  }
  return false;
}

console.log(checkSearchQuery("Item - F"));

//alternative of  getElementsbyTagName, getElementsByClassName

const allLiElementsUsingQuery = document.querySelectorAll("li");
//LIST of Node Elements
for (let i = 0; i < allLiElementsUsingQuery.length; i++) {
  allLiElementsUsingQuery[i].style.textDecoration = "underline";
}

//give yellow text color for all elements have .list class

const listClassItems = document.querySelectorAll(".list");

for (let i = 0; i < listClassItems.length; i++) {
  listClassItems[i].style.color = "yellow";
}

//make font size bigger for th tags

//const allHeaders=document.getElementsByTagName("th");
const allHeaders = document.querySelectorAll("th");

for (let i = 0; i < allHeaders.length; i++) {
  allHeaders[i].style.fontSize = "25px";
}

const footerItem = document.querySelector(".footer");
footerItem.style.color = "red";

const highLightedItem = document.querySelector("#higlighted");

highLightedItem.style.textDecoration = "underline";

//highlight first TD and Last TD of the table

const firstTd = document.querySelector("td");

firstTd.style.color = "blue";

const cells = document.querySelectorAll("td");
const lastTd = cells[cells.length - 1];
lastTd.style.color = "blue";
