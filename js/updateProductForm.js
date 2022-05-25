const d = document;
const ls = localStorage;
const idProd = window.location.search.slice(6);
const form = d.getElementById("updateForm");
const inputCod = d.getElementById("updateCod");
const inputName = d.getElementById("updateName");
const inputColor = d.getElementById("updateColor");
const inputPeso = d.getElementById("updatePeso");
const productos = JSON.parse(ls.getItem("productos"));
const productoAEditar = productos[idProd];
const nombreDelProd = d.getElementById("nombreProductoAEditar")

if (productoAEditar !== undefined) {
  inputCod.value = productoAEditar.cod;
  inputName.value = productoAEditar.name;
  inputColor.value = productoAEditar.color;
  inputPeso.value = productoAEditar.peso;
}

nombreDelProd.innerText = `${productoAEditar.name}`

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { updateCod, updateName, updateColor, updatePeso } = e.target;
  let newValues = [
    {
      cod: updateCod.value,
      name: updateName.value,
      color: updateColor.value,
      peso: updatePeso.value,
    },
  ];

  productos.push(...newValues);
  productos.splice(idProd, 1);
  ls.setItem("productos", JSON.stringify(productos));

  window.location.replace("/index.html");
});
