const d = document;
const ls = localStorage;

if (d.getElementById("createForm")) {
  const form = d.getElementById("createForm");

  form.addEventListener("submit", (e) => {
    const { cod, name, color, peso } = e.target;
    let formValues = [
      {
        cod: cod.value,
        name: name.value,
        color: color.value,
        peso: peso.value,
      },
    ];

    let productosEnLS = JSON.parse(ls.getItem("productos"));

    productosEnLS.push(...formValues);

    ls.setItem("productos", JSON.stringify(productosEnLS));
  });
  JSON.parse(ls.getItem("productos"));
}
