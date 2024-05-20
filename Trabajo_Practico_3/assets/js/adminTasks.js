let tareas = [];
let accion = 1;
while (accion !== 0) {
  accion = parseInt(prompt("¿Qué desea realizar?\n 4-Eliminar tarea\n 3-Editar tarea\n 2-Listar tareas\n 1-Agregar tarea\n 0-Salir"));
  switch (accion) {
    case 1:
      agregar(prompt("Ingrese nueva tarea"));
      break;
    case 2:
      listar();
      break;
    case 3:
      editar(prompt("Ingrese la tarea a editar"));
      break;
    case 4:
      eliminar(prompt("Ingrese la tarea a eliminar"));
      break;
    case 0: 
      alert("Hasta la próxima")
      break;
    default:
        alert("Número no válido");
      break;
  }

}

function agregar(nuevaTarea) {
  if (nuevaTarea !== '' && nuevaTarea.charAt(0) !== ' ' && nuevaTarea.charAt(tareas.length -1 ) !== ' ' ) {
    //El .charAt devuelve la posicion donde el elemento se encuentra en el string
    tareas.push(nuevaTarea);
    alert(`Tarea "${nuevaTarea}" agregada con éxito.`);
  } else if (nuevaTarea === '') {
    alert("Error: El nombre de la tarea no puede estar vacío.");
  } else {
    alert("Error: El nombre de la tarea no puede contener espacios.");
  }
}



function listar() {
  if (tareas.length === 0) {
    alert("No hay tareas pendientes.");
  } else {
    alert("Lista de tareas: " + tareas);

  }
}

function eliminar(elemento) {
  if(tareas.includes(elemento)){
    tareas.splice((tareas.indexOf(elemento)), 1)
    alert("Tarea eliminada con exito")
  } else {
    alert(`Tarea no encontrada`)
  }
}
//indexOf te devuelve la posicion donde el elemento se encuentra en el array
function editar(elemento){
  if(tareas.includes(elemento)){
    let nuevoNombre = prompt("Ingrese el nuevo nombre de la tarea")
    tareas[tareas.indexOf(elemento)] = nuevoNombre;
    alert(`Tarea editada con exito`)
  } else{
    alert("Tarea no encontrada")
  }
}



