var pendientes = [
    { descripcion: "Tarea de Agenda de JS", completado: false },
    { descripcion: "Comer", completado: false },
    { descripcion: "Dormir", completado: true },
    { descripcion: "Llorar", completado: false }
];

function imprimirPendiente(pendiente, index) {
    var lista = document.getElementById("lista");
    lista.insertAdjacentHTML('beforeend',
        `<li ` + estaCompletado(pendiente.completado) + ` onClick="marcarCompletado(` + index + `)">
            <div class="checkbox">
                <i class="fa fa-check"></i>
            </div>
            <div class="descripcion">`+ pendiente.descripcion + `</div>
        </li>`
    );
}

function estaCompletado(completado) {
    if (completado) {
        return 'class="done pendiente"';
    } else {
        return 'class="pendiente"';
    }
}

function marcarCompletado(index) {
    // var pendientesInterfaz = document.getElementsByClassName("pendiente");
    // pendientesInterfaz[index].classList.toggle("done");
    pendientes[index].completado = !pendientes[index].completado;
    imprimirTodosLosPendientes();
}

function imprimirTodosLosPendientes() {
    document.getElementById("lista").innerHTML = "";
    pendientes.forEach(imprimirPendiente);
}

function nuevoElemento(){
    var campo = document.getElementById("item").value;
    var nombre = { descripcion: campo, completado: false };
    if (campo === '') {
        alert("Escribe algo plis:(");
      } else {
        pendientes.push(nombre);  
        imprimirTodosLosPendientes();
      }
 
}

pendientes.forEach(imprimirPendiente);
