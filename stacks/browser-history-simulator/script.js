let backStack = [];
let forwardStack = [];

let currentPage = "Home";

// UI elements
const pageDisplay = document.getElementById("currentPage");
const backList = document.getElementById("backStackList");
const forwardList = document.getElementById("forwardStackList");
const operationText = document.getElementById("operation");

// update UI
function updateUI() {
  pageDisplay.textContent = currentPage;

  backList.innerHTML = "";
  forwardList.innerHTML = "";

  backStack.forEach(p => {
    let li = document.createElement("li");
    li.textContent = p;
    backList.appendChild(li);
  });

  forwardStack.forEach(p => {
    let li = document.createElement("li");
    li.textContent = p;
    forwardList.appendChild(li);
  });
}

// visit new page
function visit() {
  let input = document.getElementById("urlInput").value;
  if (!input) return;

  operationText.textContent = "push → backStack | clear forwardStack";

  backStack.push(currentPage);
  currentPage = input;
  forwardStack = [];

  updateUI();
}

// go back
function goBack() {
  if (backStack.length === 0) return;

  operationText.textContent = "pop ← backStack | push → forwardStack";

  forwardStack.push(currentPage);
  currentPage = backStack.pop();

  updateUI();
}

// go forward
function goForward() {
  if (forwardStack.length === 0) return;

  operationText.textContent = "pop ← forwardStack | push → backStack";

  backStack.push(currentPage);
  currentPage = forwardStack.pop();

  updateUI();
}