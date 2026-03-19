# 🌐 Browser History Simulator (Stack Application)

## 🌐 Live Demo
👉 https://your-netlify-link.netlify.app

---

## 📌 Description
This project simulates how browser navigation works using **Back** and **Forward** buttons.

It demonstrates how **stacks** are used internally in browsers like Chrome to manage navigation history.

---

## 🧠 DSA Concept Used
**Stack (Last In, First Out - LIFO)**

---

## ⚙️ Features
- Visit new pages
- Navigate back ⬅
- Navigate forward ➡
- Visual representation of Back Stack and Forward Stack
- Displays current operation (push/pop)

---

## 🔍 How Stack is Used

### 🟢 Back Stack
- Stores previously visited pages
- When visiting a new page:
  - Current page is pushed into the back stack

### 🔴 Back Operation
- Pops the last page from the back stack
- Moves current page into the forward stack

### 🔵 Forward Stack
- Stores pages when user navigates back

### 🔁 Forward Operation
- Pops from forward stack
- Pushes current page into back stack

---

## 🌍 Real-world Applications
- Web browsers (Chrome, Edge, Safari)
- Navigation systems
- Undo/Redo systems

---

## 🚀 How to Run Locally

### 🔽 Clone the repository
```bash
git clone https://github.com/your-username/dsa_application.git
cd dsa_application/stacks/browser-history-simulator
Open index.html in your browser