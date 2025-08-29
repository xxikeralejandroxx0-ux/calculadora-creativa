function resolver() {
  let input = document.getElementById("input").value;
  let respuesta = document.getElementById("respuesta");

  try {
    let resultado = eval(input); // ⚠️ solo como ejemplo
    respuesta.innerHTML = `
      Resultado: <b>${resultado}</b><br>
      En la calculadora escribe: ${input} =
    `;
  } catch (error) {
    respuesta.innerHTML = "⚠️ No entiendo esa operación.";
  }
}
