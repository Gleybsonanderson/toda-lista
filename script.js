const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
addBtn.addEventListener("click", function() {
  adicionarTarefa();
});
function adicionarTarefa() {
  const texto = input.value;

  if (texto === "") {
    return;
  }

  const li = document.createElement("li");
  li.textContent = texto;

  li.addEventListener("click", function() {
    li.classList.toggle("concluida");
  });

  const btnApagar = document.createElement("button");
  btnApagar.textContent = "x";
  btnApagar.classList.add("btn-apagar");

  btnApagar.addEventListener("click", function(event) {
    event.stopPropagation();
    li.remove();
  });

  li.appendChild(btnApagar);
  taskList.appendChild(li);

  input.value = "";
}