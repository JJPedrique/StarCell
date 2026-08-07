function irArriba(){
    window.scrollTo({
        top:0,behavior:'smooth'
    });
}

function preguntarProducto(telefono, producto) {
  let mensaje = `Hola, ¿Me podría decir la disponibilidad y el precio del siguiente producto: ${producto}?`;
  let mensajeCodificado = encodeURIComponent(mensaje);
  let url = `https://wa.me/${telefono}?text=${mensajeCodificado}`;
  window.open(url, '_blank');
}

function preguntarServicio(telefono, producto) {
  let mensaje = `Hola, ¿Me podría decir la disponibilidad y el precio del siguiente servicio: ${producto}?`;
  let mensajeCodificado = encodeURIComponent(mensaje);
  let url = `https://wa.me/${telefono}?text=${mensajeCodificado}`;
  window.open(url, '_blank');
}