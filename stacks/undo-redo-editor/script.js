const editor = document.getElementById("editor");

let undoStack = [];
let redoStack = [];
let previousText = "";

// UI elements
const undoList = document.getElementById("undoStackList");
const redoList = document.getElementById("redoStackList");
const operationText = document.getElementById("operation");
const prevStateText = document.getElementById("prevState");

// update UI
function updateUI() {
  undoList.innerHTML = "";
  redoList.innerHTML = "";

  undoStack.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    undoList.appendChild(li);
  });

  redoStack.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    redoList.appendChild(li);
  });

  prevStateText.textContent = `"${previousText}"`;
}

// typing
editor.addEventListener("input", () => {
  operationText.textContent = "push → undoStack";

  undoStack.push(previousText);
  previousText = editor.value;

  redoStack = [];

  updateUI();
});

// undo
function undo() {
  if (undoStack.length === 0) return;

  operationText.textContent = "pop ← undoStack | push → redoStack";

  redoStack.push(editor.value);
  let last = undoStack.pop();

  editor.value = last;
  previousText = last;

  updateUI();
}

// redo
function redo() {
  if (redoStack.length === 0) return;

  operationText.textContent = "pop ← redoStack | push → undoStack";

  undoStack.push(editor.value);
  let next = redoStack.pop();

  editor.value = next;
  previousText = next;

  updateUI();
}