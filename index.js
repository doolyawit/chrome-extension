//Variable
const inputBtn = document.getElementById("input-btn"); //  input button
const inputEl = document.getElementById("input-el"); // input field
const ulEl = document.getElementById("ul-el"); // ul list for outout
let myLeads = []; // array for store links

inputBtn.addEventListener("click", function () {
  // when click input button
  myLeads.push(inputEl.value); // insert input field data into array
  renderLeads(); // call show output function
  inputEl.value = ""; // clear input field
});
function renderLeads() {
  let listItems = ""; // set list (of links) blank every loop
  for (i = 0; i < myLeads.length; i++) {
    listItems += `<li>
        <a href="https://${myLeads[i]}"target='_blank'>
        ${myLeads[i]}
        </a>
    </li> `; // create li tag for each link
    //Another way
    //   1.create element
    //   const li = document.createElement("li");
    //   2. set text content
    //   li.textContent = myLeads[i];
    //   3. append to ul
    //   ulEl.append(li);
  }
  ulEl.innerHTML = listItems; // add li tag to ul
}
