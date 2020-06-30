function getName(producto) {
    return producto.nombre;
}

function getStock(producto) {
    return producto.stock;
}

function getDescripcion(producto) {
    return producto.descripcion;
}
module.exports = { getName, getStock, getDescripcion };