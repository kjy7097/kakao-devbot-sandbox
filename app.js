const form = document.getElementById("add-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo");

const count = document.getElementById("todo-count");

function updateCount() {
  count.textContent = `총 ${list.children.length}개`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
  updateCount();
  input.value = "";
});
