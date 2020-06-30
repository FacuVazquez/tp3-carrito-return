function verificarCarrito(carrito) {
    return carrito.usuario;
}

function verificarCantidadItem(carrito) {
    let contador = 0;
    carrito.items.forEach(element => {
        contador = contador + element[1];
    });
    if (contador > 0 && contador <= 10) {
        return true;
    } else {
        return false;
    }
}

module.exports = { verificarCarrito, verificarCantidadItem };