# ✏️ Undo / Redo Text Editor (Stack Application)

## 🌐 Live Demo
👉 https://deluxe-halva-45b5ba.netlify.app/

---

## 📌 Description
This project demonstrates how the **Undo and Redo functionality** works in real-world applications using the **Stack data structure**.

Instead of just solving DSA problems, this project focuses on applying stacks in a practical scenario similar to text editors like VS Code or Google Docs.

---

## 🧠 DSA Concept Used
**Stack (LIFO - Last In, First Out)**

---

## ⚙️ Features
- Type text in the editor
- Undo last action (Ctrl-like behavior)
- Redo undone action
- Simple and interactive UI

---

## 🔍 How Stack is Used

### 🟢 Undo Stack
- Every time the user types, the **previous state** is pushed into a stack
- This helps store history

### 🔴 Undo Operation
- The latest state is removed using **pop()**
- This brings back the previous version

### 🔵 Redo Stack
- Stores undone states
- Helps restore changes when redo is clicked

---

## 🌍 Real-world Applications
- Code editors (VS Code)
- Document editors (Google Docs)
- Design tools (Figma)

---

## 🚀 How to Run Locally

### 🔽 Clone the repository
```bash
git clone https://github.com/your-username/dsa_application.git
cd dsa_application/stacks/undo-redo-editor
Open index.html in your browser