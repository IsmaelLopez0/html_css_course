let personName = document.getElementById("personName");
let previewNombre = document.getElementById("previewNombre");
let btnGuardar = document.querySelector(".btnGuardar");
let i = 0;

personName.addEventListener("keyup", (evt) => {
  previewNombre.innerHTML = evt.target.value;
});

btnGuardar.addEventListener("click", () => {
  const parent = document.querySelector(".listItems");
  const newItem = document.createElement("div");
  newItem.setAttribute("class", "item");
  newItem.setAttribute("id", "item"+i);

  const newP = document.createElement("p");
  newP.innerText = previewNombre.innerHTML;
  newItem.appendChild(newP);

  const newBtn = document.createElement("button");
  newBtn.setAttribute("class", "btnDelete");
  newBtn.innerHTML = "X";
  newItem.appendChild(newBtn);

  newBtn.addEventListener("click", () => {
    parent.removeChild(newItem);
  })
  parent.appendChild(newItem);
  i++;
  personName.value = "";
  previewNombre.innerHTML = "";
});