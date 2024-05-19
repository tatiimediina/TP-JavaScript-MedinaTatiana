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
  }
  
}

function agregar(nuevaTarea) {
  if (nuevaTarea) {
    tareas.push(nuevaTarea);
    alert(`Tarea "${nuevaTarea}" agregada con éxito.`);
  } else {
    alert("Error: El nombre de la tarea no puede estar vacío.");
  } 
}

function listar() {
  if (tareas.length === 0) {
    alert("No hay tareas pendientes.");
  } else {
    alert("Lista de tareas:" + tareas);
    
  }
}

function eliminar(elemento){
    for (let i=0; i<tareas.length; i++){
       if(tareas[i] === elemento){
         tareas.splice(i,1);
       } 
    }
}

function editar(elemento){
  let nuevoNombre = prompt("Ingrese el nuevo nombre")
  for (let i=0; i<tareas.length; i++){
     if(tareas[i] === elemento){
       tareas.splice(i,1, nuevoNombre);
     }
  }
}




