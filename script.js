// Lista de ramos y sus prerrequisitos
const ramos = [
  { id: 'mat1', nombre: 'Matemáticas I', requisitos: [] },
  { id: 'fis1', nombre: 'Física I', requisitos: ['mat1'] },
  { id: 'quim1', nombre: 'Química I', requisitos: [] },
  { id: 'mat2', nombre: 'Matemáticas II', requisitos: ['mat1'] },
  { id: 'fis2', nombre: 'Física II', requisitos: ['fis1', 'mat2'] },
  { id: 'quim2', nombre: 'Química II', requisitos: ['quim1'] },
  { id: 'prog1', nombre: 'Programación I', requisitos: [] },
  { id: 'prog2', nombre: 'Programación II', requisitos: ['prog1'] },
  // Agrega todos los ramos de tu archivo acá con su id único y requisitos
];

const aprobados = new Set();

function puedeAprobarse(ramo) {
  return ramo.requisitos.every(req => aprobados.has(req));
}

function crearMalla() {
  const contenedor = document.getElementById('malla-container');

  ramos.forEach(ramo => {
    const div = document.createElement('div');
    div.classList.add('ramo');
    div.id = ramo.id;
    div.innerText = ramo.nombre;

    div.addEventListener('click', () => {
      if (aprobados.has(ramo.id)) return; // Ya aprobado
      if (puedeAprobarse(ramo)) {
        div.classList.add('aprobado');
        aprobados.add(ramo.id);
      } else {
        alert('Debes aprobar los requisitos previos.');
      }
    });

    contenedor.appendChild(div);
  });
}

crearMalla();
