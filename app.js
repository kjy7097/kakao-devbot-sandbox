const form = document.getElementById("add-form");
const input = document.getElementById("todo-input");
const dueInput = document.getElementById("due-input");
const list = document.getElementById("todo");

// 로컬 기준 오늘 날짜를 YYYY-MM-DD 문자열로 반환 (시간대 어긋남 방지)
function todayString() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  const li = document.createElement("li");
  const title = document.createElement("span");
  title.textContent = text;
  li.appendChild(title);
  const due = dueInput.value;
  if (due) {
    const dueSpan = document.createElement("span");
    dueSpan.className = "due";
    dueSpan.textContent = "마감: " + due;
    if (due < todayString()) dueSpan.classList.add("overdue");
    li.appendChild(dueSpan);
  }
  list.appendChild(li);
  input.value = "";
  dueInput.value = "";
});
