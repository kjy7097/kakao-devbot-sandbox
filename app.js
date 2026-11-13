const form = document.getElementById("add-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
  input.value = "";
});
