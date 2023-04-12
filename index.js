// ----Variable----
const inputBtn = document.getElementById("input-btn"); //  input button
const inputEl = document.getElementById("input-el"); // input field
const ulEl = document.getElementById("ul-el"); // ul list for outout
const deleteBtn = document.getElementById("delete-btn"); // delete button
const tabBtn = document.getElementById("tab-btn"); // save tab button
let myLeads = []; // array for store links
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")); // get localstorage data

// ----In case we refresh page ( have data already , not first time use)----
if (leadsFromLocalStorage) {
  // check if have previous local data
  myLeads = leadsFromLocalStorage; // set to array for send to renderLeads();
  render(myLeads); // render it out
}

//----Show output----
function render(leads) {
  let listItems = ""; // set list (of links) blank every loop
  for (i = 0; i < leads.length; i++) {
    listItems += `<li>
          <a href="${leads[i]}"target='_blank'>
          ${leads[i]}
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

// ----Click Save----
inputBtn.addEventListener("click", function () {
  // when click input button
  myLeads.push(inputEl.value); // insert input field data into array
  inputEl.value = ""; // clear input field
  localStorage.setItem("myLeads", JSON.stringify(myLeads)); // store in local storage (convert array --> string)
  render(myLeads); // call show output function
});

//----Click Save Tab----
tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // chrome api to get current url
    myLeads.push(tabs[0].url); // push current url to array
    localStorage.setItem("myLeads", JSON.stringify(myLeads)); // store in local storage (convert array --> string)
    render(myLeads); // call show output function
  });
});

// ----Click Delete All----
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = []; // next loop
  render(myLeads); // for output
});
