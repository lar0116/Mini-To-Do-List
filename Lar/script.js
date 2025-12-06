// DOM Single Selectors
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const delBtn = document.getElementById("delBtn");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");
const totalCount = document.getElementById("totalCount");
const doneCount = document.getElementById("doneCount");
const listBox = document.getElementById("listBox");

// Update counters (uses getElementsByClassName)
function updateCounts() {
  const items = document.getElementsByClassName("task-item");
  const doneItems = document.querySelectorAll(".task-item.done");

  totalCount.textContent = items.length;
  doneCount.textContent = doneItems.length;
}

// Show message helper
function showMessage(text) {
  message.textContent = text;
  setTimeout(() => {
    message.textContent = "";
  }, 1500);
}

// Add item feature
addBtn.addEventListener("click", function () {
  const value = taskInput.value.trim();

  if (value === "") {
    showMessage("Please enter a task.");
    return;
  }

  // create li
  const li = document.createElement("li");
  li.textContent = value;
  li.className = "task-item";

  // click to toggle done
  li.addEventListener("click", function () {
    li.classList.toggle("done");
    updateCounts();
  });

  taskList.appendChild(li);
  taskInput.value = "";

  updateCounts();
});

// Delete last item (uses getElementsByTagName)
delBtn.addEventListener("click", function () {
  const allLi = taskList.getElementsByTagName("li");

  if (allLi.length === 0) {
    showMessage("No items to delete.");
    return;
  }

  taskList.removeChild(allLi[allLi.length - 1]);
  updateCounts();
});

// Add click listeners to default items
const defaultItems = document.querySelectorAll(".task-item");
defaultItems.forEach(function (item) {
  item.addEventListener("click", function () {
    item.classList.toggle("done");
    updateCounts();
  });
});

// Hover highlight listBox (mouseover & mouseout)
listBox.addEventListener("mouseover", function () {
  listBox.style.borderColor = "#2563eb";
});

listBox.addEventListener("mouseout", function () {
  listBox.style.borderColor = "#cbd5e1";
});

// Initialize counts on load
updateCounts();
