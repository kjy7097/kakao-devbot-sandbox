const form = document.getElementById("add-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = text;
  const del = document.createElement("button");
  del.type = "button";
  del.className = "delete-btn";
  del.textContent = "삭제";
  del.addEventListener("click", () => li.remove());
  li.appendChild(span);
  li.appendChild(del);
  list.appendChild(li);
  input.value = "";
});
