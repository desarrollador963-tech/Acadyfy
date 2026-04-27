const API = "http://localhost:3000/api/syllabus";

const form = document.getElementById("form");
const lista = document.getElementById("lista");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        nombre: document.getElementById("nombre").value,
        objetivos: document.getElementById("objetivos").value,
        metodologia: document.getElementById("metodologia").value
    };

    await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    form.reset();
    cargarDatos();
});

async function cargarDatos() {
    const res = await fetch(API);
    const data = await res.json();

    lista.innerHTML = "";

    data.forEach(s => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${s.nombre}</strong> - ${s.status}
        `;
        lista.appendChild(li);
    });
}

cargarDatos();