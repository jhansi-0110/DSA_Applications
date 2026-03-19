const editor = document.getElementById("editor");

let undoStack = [];
let redoStack = [];

// store previous state
let previousText = "";

// when user types
editor.addEventListener("input", () => {
  undoStack.push(previousText);  // save old state
  previousText = editor.value;   // update current
  redoStack = [];               // clear redo stack
});

// UNDO
function undo() {
  if (undoStack.length === 0) return;

  redoStack.push(editor.value);         // save current for redo
  let lastState = undoStack.pop();      // get last state
  editor.value = lastState;
  previousText = lastState;
}

// REDO
function redo() {
  if (redoStack.length === 0) return;

  undoStack.push(editor.value);         // save current
  let nextState = redoStack.pop();      // get redo state
  editor.value = nextState;
  previousText = nextState;
}