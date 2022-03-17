let Nombre, Apellido;

Nombre = prompt('Ingrese su/s nombre');
Apellido = prompt('Ingrese su/s apellidos');

if (confirm('le apetece un cafe')) {
  alert(
    `Bievenid@ ${Nombre} ${Apellido} En breves recibira su cafe calientito`
  );
} else {
  alert(`Bievenid@ ${Nombre} ${Apellido}. No hay cafe`);
}
