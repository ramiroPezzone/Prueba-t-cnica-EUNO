const d = document;
const ls = localStorage;

let initialProducts = [];

// Revisión en ls de productos
if (!ls.getItem("productos")) {
  ls.setItem("productos", JSON.stringify(initialProducts));
} else {
  var productosInDB = JSON.parse(ls.getItem("productos"));
}
//

if (d.getElementById("productDataTr")) {
  let dataTR = d.getElementById("productDataTr");
  let infoTotalDeProds = d.getElementById("totalProductos");

  //   Renderizado de productos
  if (productosInDB.length === 0) {
    dataTR.insertAdjacentHTML(
      "afterend",
      "<tr><td colspan='6'>No existen productos en memoria</td></tr>"
    );
  } else {
    productosInDB.forEach((prod) => {
      dataTR.insertAdjacentHTML(
        "afterend",
        `<tr>
          <td>${prod.cod}</td>
          <td>${prod.name}</td>
          <td>${prod.color}</td>
          <td>${prod.peso}</td>
          
          <td>
          <button onClick="editarProd(${productosInDB.findIndex(
            (el) => el.cod === prod.cod
          )})" id="btnEditar">
          <a href='../pages/updateProduct.html?prod=${productosInDB.findIndex(
            (el) => el.cod === prod.cod
          )}'>Editar</a>
          </button>
          </td>
          
          <td>
          <button onClick="eliminarProd(${productosInDB.findIndex(
            (el) => el.cod === prod.cod
          )})" id="btnEliminar">
          Eliminar
          </button>
          </td>
          </tr>`
      );
    });
  }
  //

  // Información del total de prods
  let totalProductos = productosInDB.length;
  infoTotalDeProds.innerText = `${totalProductos}`;
  //
}

// Eliminación de producto
const eliminarProd = (cod) => {
  let productosEnLS = JSON.parse(ls.getItem("productos"));
  productosEnLS.splice(cod, 1);
  ls.setItem("productos", JSON.stringify(productosEnLS));
  location.reload();
};
//
