const carrito = require('./carritoUsuario');

test('verificar usuario de carrito', () => {
    class Carrito {
        constructor(usuarioCarrito) {
            this.usuario = usuarioCarrito;
            this.montoTotal = 0;
            this.items = [];
        }
    }

    var carrito1 = new Carrito("martin");
    expect(carrito.verificarCarrito(carrito1)).toBeDefined();
});